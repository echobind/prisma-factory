import { faker } from '@faker-js/faker';
import { createTeamMemberFactory, createTeamFactory } from '../generated';

export const TeamMemberFactory = () =>
  createTeamMemberFactory({
    name: faker.name.findName,
    createdAt: faker.date.past,
    updatedAt: faker.date.recent,
    role: faker.name.jobTitle,
    description: faker.lorem.sentence,
    image: faker.image.avatar,
    twitter: '#',
    linkedin: '#',
  });

const createTeamMembers = () => {
  return new Array(10)
    .fill(() =>
      TeamMemberFactory().build({
        role: () => String('amazing team member').toUpperCase(),
        updatedAt: () => new Date(),
      })
    )
    .map((member) => member());
};

export const TeamFactory = () =>
  createTeamFactory(
    {
      name: faker.company.companyName,
      createdAt: faker.date.past,
      updatedAt: faker.date.recent,
      members: {
        createMany: {
          data: createTeamMembers(),
        },
      },
    },
    {}
  );
