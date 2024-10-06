import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs'
import prisma from '../../../lib/prisma'

export async function POST(request) {
  console.log('Received registration request')

  const { email, password, name } = await request.json()

  console.log('Attempting registration with:', { email, name })

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } })

    if (existingUser) {
      console.log('Registration failed: Email already exists')
      return NextResponse.json({ message: 'Email already exists' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    })

    console.log('Registration successful for user:', user.id)
    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ message: 'An error occurred' }, { status: 500 })
  }
}
