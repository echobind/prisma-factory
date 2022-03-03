import { camelCase } from 'change-case';

import { buildPrismaInclude } from './buildPrismaInclude';

export interface CreateFactoryOptions<CreateInputType> {
  client?: string;
  beforeCreate?: (attrs: CreateInputType) => typeof attrs;
}

export interface CreateFactoryReturn<CreateInputType, ReturnModelType> {
  build: (attrs?: Partial<CreateInputType>) => CreateInputType;
  create: (attrs?: Partial<CreateInputType>) => Promise<ReturnModelType>;
}

/**
 * Creates a new Prisma Factory based on a provided model name and set of default attributes.
 * @example
 *   const REQUIRED_ATTRIBUTES = { email: chance.email(), firstName: 'Dave', password: 'test1234' };
 *   createFactory<Prisma.UserCreateInput>('User', REQUIRED_ATTRIBUTES);
 */
export function createFactory<CreateInputType, ReturnModelType>(
  modelName: string,
  defaultAttrs = {},
  options: CreateFactoryOptions<CreateInputType> = {}
): CreateFactoryReturn<CreateInputType, ReturnModelType> {
  const FactoryFunctions = {
    build: (attrs: Partial<CreateInputType> = {}) => {
      return {
        ...defaultAttrs,
        ...attrs,
      } as CreateInputType;
    },

    create: async (attrs: Partial<CreateInputType> = {}) => {
      const prismaClientPath = options.client ?? '@prisma/client';

      const { PrismaClient } = await import(prismaClientPath);
      const prisma = new PrismaClient();

      let data = FactoryFunctions.build(attrs);
      const prismaOptions: Record<string, any> = {};

      const includes = buildPrismaInclude(attrs);
      if (includes) prismaOptions.include = includes;

      if (options.beforeCreate) {
        data = options.beforeCreate(data);
      }

      const prismaModel = camelCase(modelName);

      const result: Promise<ReturnModelType> = await prisma[prismaModel].create({
        data,
        ...prismaOptions,
      });

      return result;
    },
  };

  return FactoryFunctions;
}
