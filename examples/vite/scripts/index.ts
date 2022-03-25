import { PrismaClient } from 'prisma/client';
import { getErrorMessage } from 'catch-safe';
import { TeamFactory, TeamMemberFactory } from '../prisma/factories/team';

async function main() {
  const prisma = new PrismaClient();

  for (let i = 0; i < 10; i++) {
    const created = await TeamFactory.create({
      members: {
        createMany: {
          data: new Array(10).fill(() => TeamMemberFactory.build()).map((member) => member()),
        },
      },
    });

    const data = await prisma.team.findUnique({
      where: { id: created.id },
      include: { members: true },
    });

    console.dir(data, { depth: null });
  }
}

main()
  .catch((err) => {
    console.error(getErrorMessage(err));
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
