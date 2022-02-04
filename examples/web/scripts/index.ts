import Chance from 'chance';
import { createMusicianFactory } from '.prisma-factory/generated';

const chance = new Chance();

export const MusicianFactory = createMusicianFactory({
  email: chance.email(),
  name: chance.name(),
});

async function main() {
  const data = await MusicianFactory.create({
    instrument: {
      create: {
        name: 'Triangle',
      },
    },
  });

  console.log(data);
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
