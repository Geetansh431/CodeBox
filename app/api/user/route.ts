import { db } from '@/config/db';
import { usersTable } from '@/config/schema';
import { getCurrentUser } from '@/lib/auth';
import { NextResponse } from 'next/server';
import { eq } from 'drizzle-orm';

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
    })
    .from(usersTable)
    .where(eq(usersTable.id, session.userId));

  if (users?.length <= 0) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  return NextResponse.json(users[0]);
}
