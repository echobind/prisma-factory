import { faker } from '@faker-js/faker';
import { createPersonFactory, createTeamFactory, createSkillFactory } from '../generated';

export const SkillFactory = createSkillFactory({
  name: faker.name.jobArea,
  createdAt: faker.date.past,
  updatedAt: faker.date.past,
  description: faker.name.jobDescriptor,
});

export const TeamMemberFactory = createPersonFactory({
  name: faker.name.findName,
  createdAt: faker.date.past,
  updatedAt: faker.date.recent,
  role: faker.name.jobTitle,
  description: faker.lorem.sentence,
  image: faker.image.avatar,
  twitter: '#',
  linkedin: '#',
  expertise: {
    // TODO: Fix these typings
    create: SkillFactory.build() as any,
  },
});

export const TeamFactory = () =>
  createTeamFactory(
    {
      name: faker.company.companyName,
      createdAt: faker.date.past,
      updatedAt: faker.date.recent,
      members: {
        createMany: {
          data: new Array(10).fill(() => TeamMemberFactory.build()),
        },
      },
    },
    {}
  );
