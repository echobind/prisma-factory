import cuid from 'cuid';
import { faker } from '@faker-js/faker';
import { createTeamMemberFactory } from '../generated';

export const TeamMemberFactory = createTeamMemberFactory({
  id: faker.unique(cuid),
  name: faker.name.findName(),
  createdAt: faker.date.past(),
  updatedAt: new Date(),
  role: faker.name.jobTitle(),
  description: faker.lorem.sentence(),
  image: faker.image.avatar(),
  twitter: '#',
  linkedin: '#',
});
