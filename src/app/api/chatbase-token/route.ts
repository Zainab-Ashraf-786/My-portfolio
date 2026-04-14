import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(req: NextRequest) {
  const secret = process.env.CHATBOT_IDENTITY_SECRET;

  // If secret not configured, return empty response (widget will load without identity)
  if (!secret || secret === 'your_identity_secret_here') {
    return NextResponse.json({ token: null });
  }

  const user = {
    id: 'demo-user-123',
    email: 'visitor@example.com',
    stripe_accounts: null,
  };

  try {
    const token = jwt.sign(
      {
        user_id: user.id,
        email: user.email,
        stripe_accounts: user.stripe_accounts,
      },
      secret,
      { expiresIn: '1h' }
    );

    return NextResponse.json({ token });
  } catch (error) {
    console.error('JWT signing error:', error);
    return NextResponse.json(
      { error: 'Failed to generate token' },
      { status: 500 }
    );
  }
}
