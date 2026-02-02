import { db } from '@/config/db';
import { usersTable } from '@/config/schema';
import { getCurrentUser } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';
import { calculateStreak } from '@/lib/streak';

export async function GET() {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      points: usersTable.points,
      subscription: usersTable.subscription,
      streak: usersTable.streak,
      lastActivityDate: usersTable.lastActivityDate,
      longestStreak: usersTable.longestStreak,
    })
    .from(usersTable)
    .where(eq(usersTable.id, session.userId));

  if (users?.length <= 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(users[0]);
}

// Keep POST for backwards compatibility but it now just returns existing user
export async function POST() {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const users = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      points: usersTable.points,
      subscription: usersTable.subscription,
      streak: usersTable.streak,
      lastActivityDate: usersTable.lastActivityDate,
      longestStreak: usersTable.longestStreak,
    })
    .from(usersTable)
    .where(eq(usersTable.id, session.userId));

  if (users?.length <= 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(users[0]);
}

// PATCH endpoint to update user streak
export async function PATCH(request: Request) {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const { localDate } = body;

  if (!localDate) {
    return NextResponse.json(
      { error: 'Missing localDate field' },
      { status: 400 }
    );
  }

  // Get current user data including streak information
  const users = await db
    .select({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      points: usersTable.points,
      subscription: usersTable.subscription,
      streak: usersTable.streak,
      lastActivityDate: usersTable.lastActivityDate,
      longestStreak: usersTable.longestStreak,
    })
    .from(usersTable)
    .where(eq(usersTable.id, session.userId));

  if (users?.length <= 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const user = users[0];

  // Calculate new streak
  const { newStreak, longestStreak } = calculateStreak(
    user.streak || 0,
    user.lastActivityDate || null,
    localDate
  );

  // Update user in database
  const updateResult = await db
    .update(usersTable)
    .set({
      streak: newStreak,
      lastActivityDate: localDate,
      longestStreak: Math.max(longestStreak, user.longestStreak || 0),
    })
    .where(eq(usersTable.id, session.userId))
    .returning({
      id: usersTable.id,
      name: usersTable.name,
      email: usersTable.email,
      points: usersTable.points,
      subscription: usersTable.subscription,
      streak: usersTable.streak,
      lastActivityDate: usersTable.lastActivityDate,
      longestStreak: usersTable.longestStreak,
    });

  if (updateResult?.length <= 0) {
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }

  return NextResponse.json({
    success: true,
    user: updateResult[0],
  });
}

export async function DELETE() {
  const session = await getCurrentUser();

  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    await db.delete(usersTable).where(eq(usersTable.id, session.userId));

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
