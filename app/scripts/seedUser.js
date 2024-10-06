require('dotenv').config();

const { db } = require('@vercel/postgres');
const bcrypt = require('bcryptjs');

// You can define your users here or import them from another file
const users = [
  {
    email: 'test@example.com',
    name: 'Test User',
    password: 'password123',
  },
];

async function seedUsers(client) {
  try {
    const insertedUsers = await Promise.all(
      users.map(async user => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
          INSERT INTO "User" (email, password, name, "updatedAt", "createdAt")
          VALUES (${user.email}, ${hashedPassword}, ${user.name}, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
          ON CONFLICT (email) DO NOTHING;
        `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  try {
    await seedUsers(client);
  } finally {
    await client.end();
  }
}

main().catch(err => {
  console.error('An error occurred while attempting to seed the database:', err);
  process.exit(1);
});
