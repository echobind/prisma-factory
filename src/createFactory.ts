import camelCase from "lodash/camelCase";
import { getPrismaClient } from "./getPrismaClient";

import { buildPrismaInclude } from "./buildPrismaInclude";

interface CreateFactoryOptions<CreateInputType> {
  beforeCreate?: (attrs: CreateInputType) => typeof attrs;
}

/**
 * Creates a new Prisma Factory based on a provided model name and set of default attributes.
 * @example
 *   const REQUIRED_ATTRIBUTES = { email: chance.email(), firstName: 'Dave', password: 'test1234' };
 *   createFactory<Prisma.UserCreateInput>('User', REQUIRED_ATTRIBUTES);
 */
export function createFactory<CreateInputType>(
  modelName: string,
  defaultAttrs = {},
  options: CreateFactoryOptions<CreateInputType> = {}
) {
  const prisma = getPrismaClient();

  const FactoryFunctions = {
    build: (attrs: Partial<CreateInputType> = {}) => {
      return {
        ...defaultAttrs,
        ...attrs,
      } as CreateInputType;
    },

    create: async (attrs: Partial<CreateInputType> = {}) => {
      let data = FactoryFunctions.build(attrs);
      const prismaOptions: Record<string, any> = {};
      const includes = buildPrismaInclude(attrs);
      if (includes) prismaOptions.include = includes;

      if (options.beforeCreate) {
        data = options.beforeCreate(data);
      }

      const prismaModel = camelCase(modelName as unknown as string);

      return await prisma[prismaModel].create({
        data,
        ...prismaOptions,
      });
    },
  };

  return FactoryFunctions;
}
