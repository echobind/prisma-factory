import { faker } from '@faker-js/faker';
import { createUserFactory } from '.prisma-factory/factories';

export const createUser = () => {
  const UserFactory = createUserFactory();

  return UserFactory.create({
    name: faker.name.findName(),
    email: faker.internet.email(),
  });
};
