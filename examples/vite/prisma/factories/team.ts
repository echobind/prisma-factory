import { faker } from '@faker-js/faker';
import { createPersonFactory, createTeamFactory, createSkillFactory } from '../generated';

export const TeamFactory = createTeamFactory({
  name: () => faker.company.companyName(),
});

export const SkillFactory = createSkillFactory({
  name: () => faker.name.jobArea(),
  description: () => faker.name.jobDescriptor(),
});

export const TeamMemberFactory = createPersonFactory({
  name: () => faker.name.findName(),
  role: () => faker.name.jobTitle(),
  description: () => faker.name.jobDescriptor(),
  image: () => faker.image.avatar(),
  twitter: '#',
  linkedin: '#',
  team: {
    create: () => TeamFactory.build(),
  },
  expertise: {
    create: () => SkillFactory.build(),
  },
});

// export const TeamFactory = createTeamFactory(
//   {
//     name: faker.company.companyName(),
//     createdAt: faker.date.past(),
//     updatedAt: faker.date.recent(),
//     members: {
//       createMany: {
//         data: new Array(10).fill(() => TeamMemberFactory.build()),
//       },
//     },
//   },
//   {}
// );
