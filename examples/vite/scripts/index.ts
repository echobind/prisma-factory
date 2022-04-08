import { faker } from '@faker-js/faker';
import { PrismaClient } from 'prisma/client';
import { getErrorMessage } from 'catch-safe';
import { TeamFactory, TeamMemberFactory, SkillFactory } from '../prisma/factories/team';

async function main() {
  const prisma = new PrismaClient();

  for (let i = 0; i < 100; i++) {
    const created = await TeamMemberFactory.create();

    const data = await prisma.team.findUnique({
      where: { id: created.teamId },
      include: {
        members: {
          include: {
            expertise: true,
          },
        },
      },
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
