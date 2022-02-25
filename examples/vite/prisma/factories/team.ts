import { faker } from '@faker-js/faker';
import { createTeamMemberFactory } from '../generated';

export const createTeamMember = () => {
  const TeamMemberFactory = createTeamMemberFactory();

  return TeamMemberFactory.create({
    name: faker.name.findName(),
    createdAt: faker.date.past(),
    updatedAt: new Date(),
    role: faker.name.jobTitle(),
    description: faker.lorem.sentence(),
    image: faker.image.avatar(),
    twitter: '#',
    linkedin: '#',
  });
};
