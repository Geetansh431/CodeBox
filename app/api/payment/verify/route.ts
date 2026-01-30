import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { PaymentsTable, usersTable } from '@/config/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

interface DecodedToken {
  userId: number;
  email: string;
  iat: number;
  exp: number;
}

export async function POST(request: NextRequest) {
  try {
    // Get JWT token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    const userId = decoded.userId;

    // Parse request body
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: 'Missing payment details' },
        { status: 400 }
      );
    }

    // Verify Razorpay signature
    const body_data = razorpay_order_id + '|' + razorpay_payment_id;
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET!)
      .update(body_data)
      .digest('hex');

    if (generated_signature !== razorpay_signature) {
      return NextResponse.json(
        { error: 'Invalid payment signature' },
        { status: 400 }
      );
    }

    // Update payment record in database
    const updatedPayment = await db
      .update(PaymentsTable)
      .set({
        paymentId: razorpay_payment_id,
        status: 'captured',
        updatedAt: new Date(),
      })
      .where(eq(PaymentsTable.orderId, razorpay_order_id))
      .returning();

    if (updatedPayment.length === 0) {
      return NextResponse.json(
        { error: 'Payment record not found' },
        { status: 404 }
      );
    }

    const payment = updatedPayment[0];

    // Update user subscription
    await db
      .update(usersTable)
      .set({
        subscription: payment.planType,
      })
      .where(eq(usersTable.id, userId));

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully',
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
      planType: payment.planType,
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: 'Payment verification failed' },
      { status: 500 }
    );
  }
}
