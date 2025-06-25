import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export interface CreateOrderParams {
  amount: number; // in paise
  currency?: string;
  receipt?: string;
  notes?: Record<string, string>;
}

export async function createOrder(params: CreateOrderParams) {
  return await razorpay.orders.create({
    amount: params.amount,
    currency: params.currency || 'INR',
    receipt: params.receipt,
    notes: params.notes,
  });
}

export async function verifyPaymentSignature({
  order_id,
  payment_id,
  signature,
}: {
  order_id: string;
  payment_id: string;
  signature: string;
}) {
  const crypto = await import('crypto');
  const generated_signature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(order_id + '|' + payment_id)
    .digest('hex');
  return generated_signature === signature;
} 