import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { db } from '@/config/db';
import { PaymentsTable } from '@/config/schema';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY!,
  key_secret: process.env.RAZORPAY_SECRET!,
});

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
    const { planType, amount } = body;

    // Validate input
    if (!planType || !amount) {
      return NextResponse.json(
        { error: 'planType and amount are required' },
        { status: 400 }
      );
    }

    // Create Razorpay order
    const razorpayOrder = await razorpay.orders.create({
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `order_${userId}_${Date.now()}`,
      notes: {
        userId,
        planType,
      },
    });

    // Store order in database
    const payment = await db
      .insert(PaymentsTable)
      .values({
        userId,
        orderId: razorpayOrder.id,
        amount: amount * 100,
        currency: 'INR',
        planType,
        status: 'created',
      })
      .returning();

    return NextResponse.json({
      success: true,
      orderId: razorpayOrder.id,
      amount: razorpayOrder.amount,
      currency: razorpayOrder.currency,
      keyId: process.env.RAZORPAY_API_KEY,
      paymentRecord: payment[0],
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
