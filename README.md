# prisma-factory

Generate factory functions for your Prisma models.

## Installation and Setup

This package can be installed in any project using [Prisma](https://www.prisma.io). To get started, install by running the following from the command line:

```sh
# Using yarn
yarn add prisma-factory --dev

# Using npm
npm install prisma-factory --save-dev

# Using pnpm
pnpm add prisma-factory --dev
```

Once installed, open your Prisma schema file to add the generator block for `prisma-factory`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// Add this block to your schema
generator factories {
  provider = "prisma-factory"
}
```

Run the `prisma generate` command to generate the factory files. You can import the generated files into your project from `prisma-factory/generated`.

## Examples

```ts
import { faker } from '@faker-js/faker';
import { createTeamMemberFactory } from 'prisma-factory/generated';

export const createTeamMember = () => {
  const TeamMemberFactory = createTeamMemberFactory();

  // This example uses faker to generate random data
  return TeamMemberFactory.create({
    name: faker.name.findName(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
    role: faker.name.jobTitle(),
    description: faker.lorem.sentence(),
    image: faker.image.avatar(),
    twitter: '#',
    linkedin: '#',
  });
};
```

## Database Seeding

To use `prisma-factory` to seed your database, you can write a script to create data using the generated factory functions:

```ts
#!/usr/bin/env node

import { PrismaClient } from 'prisma/client';
import { faker } from '@faker-js/faker';
import { createTeamMemberFactory } from 'prisma-factory/generated';

const prisma = new PrismaClient();

export const createTeamMember = () => {
  const TeamMemberFactory = createTeamMemberFactory();

  // This example uses faker to generate random data
  return TeamMemberFactory.create({
    name: faker.name.findName(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
    role: faker.name.jobTitle(),
    description: faker.lorem.sentence(),
    image: faker.image.avatar(),
    twitter: '#',
    linkedin: '#',
  });
};

async function main() {
  try {
    for (let i = 0; i < 10; i++) {
      await createTeamMember();
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
```
