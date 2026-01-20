import { db } from '@/config/db';
import { usersTable } from '@/config/schema';
import { getCurrentUser } from '@/lib/auth';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const session = await getCurrentUser();

    if (!session) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    // Get fresh user data from database
    const [user] = await db
      .select({
        id: usersTable.id,
        name: usersTable.name,
        email: usersTable.email,
        points: usersTable.points,
        subscription: usersTable.subscription,
      })
      .from(usersTable)
      .where(eq(usersTable.id, session.userId));

    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({ user });
  } catch (error) {
    console.error('Get current user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
