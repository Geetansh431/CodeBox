import { db } from '@/config/db';
import { ContactTable } from '@/config/schema';
import { validateContactForm } from '@/lib/validation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse request body
    const body = await request.json();

    // Validate form data
    const validation = validateContactForm(body);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // Insert into database
    const result = await db
      .insert(ContactTable)
      .values({
        name: body.name.trim(),
        email: body.email.trim().toLowerCase(),
        subject: body.subject.trim(),
        message: body.message.trim(),
        status: 'new',
      })
      .returning({
        id: ContactTable.id,
        name: ContactTable.name,
        email: ContactTable.email,
        subject: ContactTable.subject,
        createdAt: ContactTable.createdAt,
      });

    if (!result || result.length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to save contact submission',
        },
        { status: 500 }
      );
    }

    // Optional: Send email notification (you can add this later)
    // await sendEmailNotification(body.name, body.email, body.subject, body.message);

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your message! We will get back to you soon.',
        data: result[0],
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred while processing your request',
      },
      { status: 500 }
    );
  }
}

// Optional: GET endpoint to fetch contact submissions (admin only)
export async function GET() {
  try {
    // You can add authentication check here for admin access
    // const user = await getCurrentUser();
    // if (!user || user.role !== 'admin') {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const contacts = await db.select().from(ContactTable);

    return NextResponse.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    console.error('Failed to fetch contact submissions:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch submissions',
      },
      { status: 500 }
    );
  }
}
