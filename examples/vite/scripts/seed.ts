#!/usr/bin/env node

import { PrismaClient } from 'prisma/client';
import { faker } from '@faker-js/faker';
import { TeamMemberFactory, TeamFactory } from 'prisma/factories/team';

const prisma = new PrismaClient();

async function main() {
  try {
    for (let i = 0; i < 10; i++) {
      await TeamMemberFactory.create({
        id: faker.datatype.uuid,
        name: faker.name.findName,
        createdAt: faker.date.past,
        updatedAt: faker.date.recent,
        role: faker.name.jobTitle,
        description: faker.lorem.sentence,
        image: faker.image.avatar,
        twitter: '#',
        linkedin: '#',
        team: {
          create: await TeamFactory.create({
            id: faker.datatype.uuid,
            name: faker.company.companyName,
            createdAt: faker.date.past,
            updatedAt: faker.date.recent,
          }),
        },
      });
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
