import { db } from '@/config/db';
import { InvitationsTable, usersTable } from '@/config/schema';
import { getCurrentUser } from '@/lib/auth';
import { and, eq } from 'drizzle-orm';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import crypto from 'crypto';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const session = await getCurrentUser();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { email } = await req.json();

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (trimmedEmail === session.email.toLowerCase()) {
      return NextResponse.json(
        { error: 'You cannot invite yourself' },
        { status: 400 }
      );
    }

    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, trimmedEmail));

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'This person is already a CodeBox user' },
        { status: 400 }
      );
    }

    const existingInvite = await db
      .select()
      .from(InvitationsTable)
      .where(
        and(
          eq(InvitationsTable.inviterId, session.userId),
          eq(InvitationsTable.inviteeEmail, trimmedEmail),
          eq(InvitationsTable.status, 'pending')
        )
      );

    if (existingInvite.length > 0) {
      return NextResponse.json(
        { error: 'You have already invited this person' },
        { status: 400 }
      );
    }

    const pendingInvites = await db
      .select()
      .from(InvitationsTable)
      .where(
        and(
          eq(InvitationsTable.inviterId, session.userId),
          eq(InvitationsTable.status, 'pending')
        )
      );

    if (pendingInvites.length >= 5) {
      return NextResponse.json(
        { error: 'You have reached the maximum of 5 pending invitations' },
        { status: 429 }
      );
    }

    const referralCode = crypto.randomBytes(8).toString('hex');

    const [invitation] = await db
      .insert(InvitationsTable)
      .values({
        inviterId: session.userId,
        inviteeEmail: trimmedEmail,
        referralCode,
        status: 'pending',
      })
      .returning();

    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const referralLink = `${appUrl}/sign-up?ref=${referralCode}`;

    await resend.emails.send({
      from: 'CodeBox <onboarding@resend.dev>',
      to: trimmedEmail,
      subject: `${session.name} invited you to join CodeBox!`,
      html: `
        <div style="font-family: monospace; background-color: #18181b; color: #ffffff; padding: 32px; border-radius: 8px;">
          <h1 style="color: #facc15; font-size: 24px;">You're Invited to CodeBox!</h1>
          <p>Hey there! Your friend <strong>${session.name}</strong> thinks you'd love learning to code on CodeBox.</p>
          <p>Sign up now and you'll both earn bonus points:</p>
          <ul>
            <li>You get <strong>25 points</strong> as a welcome bonus</li>
            <li>${session.name} gets <strong>50 points</strong> for referring you</li>
          </ul>
          <a href="${referralLink}" style="display: inline-block; margin-top: 16px; padding: 12px 24px; background-color: #facc15; color: #000000; font-weight: bold; text-decoration: none; border: 2px solid #000;">
            Join CodeBox Now
          </a>
          <p style="margin-top: 24px; font-size: 12px; color: #a1a1aa;">
            Or copy this link: ${referralLink}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: 'Invitation sent successfully!',
      data: { id: invitation.id, referralCode },
    });
  } catch (error) {
    console.error('Invite error:', error);
    return NextResponse.json(
      { error: 'Failed to send invitation' },
      { status: 500 }
    );
  }
}
