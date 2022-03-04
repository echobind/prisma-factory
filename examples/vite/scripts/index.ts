import { faker } from '@faker-js/faker';
import { TeamMemberFactory, TeamFactory } from '../prisma/factories/team';

async function main() {
  const createTeamMembers = () => {
    const members = new Array(10).fill(() =>
      TeamMemberFactory.build({
        id: faker.datatype.uuid,
        name: faker.name.findName,
        createdAt: faker.date.past,
        updatedAt: faker.date.recent,
        role: faker.name.jobTitle,
        description: faker.lorem.sentence,
        image: faker.image.avatar,
        twitter: '#',
        linkedin: '#',
      })
    );

    return members.map((member) => member());
  };

  const data = await TeamFactory.create({
    id: faker.datatype.uuid,
    name: faker.company.companyName,
    createdAt: faker.date.past,
    updatedAt: faker.date.recent,
    members: {
      createMany: {
        data: createTeamMembers(),
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
