import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import prisma from '../../lib/prisma';

const SECRET_KEY = process.env.JWT_SECRET_KEY;

export async function POST(request) {
  console.log('Received auth request');

  const { email, password } = await request.json();

  console.log('Attempting login with:', { email });

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      console.log('Login failed: Invalid login details');
      return NextResponse.json({ message: 'Invalid login details' }, { status: 401 });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    console.log('Login successful, generated token:', token);
    return NextResponse.json({ token });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ message: 'An error occurred while trying to log in' }, { status: 500 });
  }
}
