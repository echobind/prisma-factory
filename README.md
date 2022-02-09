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
