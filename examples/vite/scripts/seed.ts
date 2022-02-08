#!/usr/bin/env node

import { PrismaClient } from '@prisma/client';

import { createUser } from '../prisma/factories/user';

const prisma = new PrismaClient();

async function main() {
  try {
    for (let i = 0; i < 10; i++) {
      await createUser();
    }
  } catch (error) {
    console.warn('Please define your seed data.');
    console.error(error);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
