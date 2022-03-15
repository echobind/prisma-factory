import { PrismaClient } from 'prisma/client';
import { TeamFactory } from '../prisma/factories/team';

async function main() {
  const prisma = new PrismaClient();

  for (let i = 0; i < 10; i++) {
    const created = await TeamFactory().create();

    const data = await prisma.team.findUnique({
      where: { id: created.id },
      include: { members: true },
    });

    console.dir(data, { depth: null });
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
