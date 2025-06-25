import { NextRequest, NextResponse } from 'next/server';
import { createOrder } from '../../../lib/razorpay';

export async function POST(req: NextRequest) {
  const { amount, notes } = await req.json();
  if (!amount) return NextResponse.json({ error: 'Amount required' }, { status: 400 });
  try {
    const order = await createOrder({ amount, notes });
    return NextResponse.json(order);
  } catch (err: any) {
    return NextResponse.json({ error: 'Failed to create order', details: err.message }, { status: 500 });
  }
} 