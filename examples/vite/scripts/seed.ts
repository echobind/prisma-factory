#!/usr/bin/env node

import { PrismaClient } from 'prisma/client';

import { TeamMemberFactory } from 'prisma/factories/team';

const prisma = new PrismaClient();

async function main() {
  try {
    for (let i = 0; i < 10; i++) {
      await TeamMemberFactory.create();
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
