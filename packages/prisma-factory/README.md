# prisma-factory

Factories ❤️ Prisma

[Check out the Discussions](https://github.com/echobind/prisma-factory/discussions)

This library uses Prisma generators to create type-safe factory functions based on your Prisma schema.

Paired with a faker library like [Chance.js](https://chancejs.com), you can create the data your tests need with minimal effort.

## Installation

```sh
yarn add prisma-factory
```

## Usage

First, add a model to your prisma schema. For example:

```
model Musician {
  id           Int        @id @default(autoincrement())
  createdAt    DateTime   @default(now())
  updatedAt    DateTime   @updatedAt
  email        String     @unique
  name         String?
  instrument   Instrument @relation(fields: [instrumentId], references: [id])
  instrumentId Int
}

model Instrument {
  id        Int        @id @default(autoincrement())
  name      String
  musicians Musician[]
}
```

Next, run `prisma generate`.

```sh
yarn prisma generate
```

Finally, create a factory for that model (we recommend test/factories/<model name>), import the newly generated function, and pass in the desired default factory attributes.

```ts
import { createMusicianFactory } from '@generated/prisma-factory';

export const MusicianFactory = createMusicianFactory({
  email: 'asdf@wee.net',
  name: `${chance.first()} ${chance.company()}`,
});
```

Once the factory is defined, you can use it in any of your tests.

```ts
import { MusicianFactory } from 'tests/factories/musician';

describe('creating factories', () => {
  beforeEach(async () => {
    // create 2 users
    await MusicianFactory.create();
    await MusicianFactory.create();
  });

  it('tests something', () => {
    // your test here.
  });
});
```

Furthermore, you can easily create complex relationships using Factory.build and the familiar Prisma syntax:

```ts
import { MusicianFactory } from 'tests/factories/musician'
import { InstrumentFactory } from 'tests/factories/instrument'

describe('creating relationships', () => {
  beforeEach(async () => {
    await MusicianFactory.create({
      name: "Rockstar"
      instrument: {
        create: InstrumentFactory.build({name: 'Harmonica'})
      }
    })
  });

  it('tests something', () => {
    // your test here.
  })
});
```
