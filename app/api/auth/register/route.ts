import { db } from '@/config/db';
import { usersTable, InvitationsTable } from '@/config/schema';
import { hashPassword, generateToken, setAuthCookie } from '@/lib/auth';
import { eq, and, sql } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, referralCode } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }

    // Check if email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check password length
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email.toLowerCase()));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const [newUser] = await db
      .insert(usersTable)
      .values({
        name,
        email: email.toLowerCase(),
        password: hashedPassword,
        points: 0,
      })
      .returning();

    // Handle referral code if provided
    if (referralCode) {
      const [invitation] = await db
        .select()
        .from(InvitationsTable)
        .where(
          and(
            eq(InvitationsTable.referralCode, referralCode),
            eq(InvitationsTable.status, 'pending')
          )
        );

      if (invitation) {
        await db
          .update(InvitationsTable)
          .set({ status: 'accepted' })
          .where(eq(InvitationsTable.id, invitation.id));

        await db
          .update(usersTable)
          .set({ referredBy: invitation.inviterId })
          .where(eq(usersTable.id, newUser.id));

        // Award 25 points to invitee
        await db
          .update(usersTable)
          .set({ points: sql`${usersTable.points} + 25` })
          .where(eq(usersTable.id, newUser.id));

        // Award 50 points to inviter
        await db
          .update(usersTable)
          .set({ points: sql`${usersTable.points} + 50` })
          .where(eq(usersTable.id, invitation.inviterId));

        newUser.points = (newUser.points || 0) + 25;
      }
    }

    // Generate JWT token
    const token = await generateToken({
      userId: newUser.id,
      email: newUser.email,
      name: newUser.name,
    });

    // Set auth cookie
    await setAuthCookie(token);

    // Return user data (without password)
    return NextResponse.json({
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        points: newUser.points,
      },
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
