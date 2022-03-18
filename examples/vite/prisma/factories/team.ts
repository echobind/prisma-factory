import { Chance } from 'chance';
import { faker } from '@faker-js/faker';
import { createPersonFactory, createTeamFactory, createSkillFactory } from '../generated';

const chance = new Chance('123');

// export const SkillFactory = createSkillFactory({
//   name: faker.name.jobArea(),
//   createdAt: faker.date.past(),
//   updatedAt: faker.date.past(),
//   description: faker.name.jobDescriptor(),
// });

export const SkillFactory = createSkillFactory({
  name: chance.name(),
  createdAt: chance.date(),
  updatedAt: chance.date(),
  description: chance.sentence(),
});

// export const TeamMemberFactory = createPersonFactory({
//   name: faker.name.findName(),
//   createdAt: faker.date.past(),
//   updatedAt: faker.date.recent(),
//   role: faker.name.jobTitle(),
//   description: faker.lorem.sentence(),
//   image: faker.image.avatar(),
//   twitter: '#',
//   linkedin: '#',
//   expertise: {
//     // TODO: Fix these typings
//     create: SkillFactory.build() as any,
//   },
// });

export const TeamMemberFactory = createPersonFactory({
  name: chance.name(),
  createdAt: chance.date(),
  updatedAt: chance.date(),
  role: chance.profession(),
  description: chance.sentence(),
  image: chance.avatar(),
  twitter: '#',
  linkedin: '#',
  expertise: {
    // TODO: Fix these typings
    create: SkillFactory.build() as any,
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

export const TeamFactory = createTeamFactory({
  name: chance.company(),
  createdAt: chance.date(),
  updatedAt: chance.date(),
  members: {
    createMany: {
      data: new Array(10).fill(() => TeamMemberFactory.build()),
    },
  },
});
