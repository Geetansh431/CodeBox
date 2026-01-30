import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/config/db';
import { PaymentsTable, usersTable } from '@/config/schema';
import { eq } from 'drizzle-orm';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-razorpay-signature');

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify webhook signature
    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_SECRET!)
      .update(body)
      .digest('hex');

    if (generated_signature !== signature) {
      return NextResponse.json(
        { error: 'Invalid webhook signature' },
        { status: 400 }
      );
    }

    const event = JSON.parse(body);

    // Handle different webhook events
    switch (event.event) {
      case 'payment.authorized':
        await handlePaymentAuthorized(event.payload);
        break;

      case 'payment.failed':
        await handlePaymentFailed(event.payload);
        break;

      case 'order.paid':
        await handleOrderPaid(event.payload);
        break;

      default:
        console.log(`Unhandled event: ${event.event}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}

async function handlePaymentAuthorized(payload: any) {
  try {
    const payment = payload.payment;
    const orderId = payment.order_id;
    const paymentId = payment.id;

    // Update payment record
    const updatedPayment = await db
      .update(PaymentsTable)
      .set({
        paymentId,
        status: 'captured',
        updatedAt: new Date(),
      })
      .where(eq(PaymentsTable.orderId, orderId))
      .returning();

    if (updatedPayment.length > 0) {
      const paymentRecord = updatedPayment[0];
      // Update user subscription
      await db
        .update(usersTable)
        .set({
          subscription: paymentRecord.planType,
        })
        .where(eq(usersTable.id, paymentRecord.userId));

      console.log(`Payment authorized for order: ${orderId}`);
    }
  } catch (error) {
    console.error('Error handling payment.authorized:', error);
  }
}

async function handlePaymentFailed(payload: any) {
  try {
    const payment = payload.payment;
    const orderId = payment.order_id;

    // Update payment status to failed
    await db
      .update(PaymentsTable)
      .set({
        status: 'failed',
        updatedAt: new Date(),
      })
      .where(eq(PaymentsTable.orderId, orderId));

    console.log(`Payment failed for order: ${orderId}`);
  } catch (error) {
    console.error('Error handling payment.failed:', error);
  }
}

async function handleOrderPaid(payload: any) {
  try {
    const order = payload.order;
    const orderId = order.id;

    // Update payment status
    await db
      .update(PaymentsTable)
      .set({
        status: 'captured',
        updatedAt: new Date(),
      })
      .where(eq(PaymentsTable.orderId, orderId));

    console.log(`Order paid: ${orderId}`);
  } catch (error) {
    console.error('Error handling order.paid:', error);
  }
}
