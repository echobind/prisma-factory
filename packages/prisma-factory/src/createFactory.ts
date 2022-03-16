import { camelCase } from 'camel-case';
import type { CreateFactoryReturn, CreateFactoryOptions, CreateFactoryHooks } from 'src/lib/types';
import { getPrismaClient, buildPrismaIncludeFromAttrs } from './lib/prisma';

/**
 * Map callaback attributes to prisma input attributes
 */
export function mapCallbackAttrs<CreateInputType>(attrs: CreateInputType): CreateInputType {
  return Object.fromEntries(
    Object.entries(attrs).map(([key, value]) => {
      return typeof value === 'object'
        ? mapCallbackAttrs(value)
        : typeof value === 'function'
        ? [key, value()]
        : [key, value];
    })
  ) as CreateInputType;
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
  options: CreateFactoryOptions = {},
  hooks: CreateFactoryHooks<CreateInputType, ReturnModelType> = {}
): CreateFactoryReturn<CreateInputType, ReturnModelType> {
  const FactoryFunctions = {
    build: (attrs: Partial<CreateInputType> = {}) => {
      return {
        ...mapCallbackAttrs(defaultAttrs),
        ...mapCallbackAttrs(attrs),
      } as CreateInputType;
    },

    create: async (attrs: Partial<CreateInputType> = {}) => {
      const prismaClientPath = options.client ?? '@prisma/client';
      const { PrismaClient } = await getPrismaClient(prismaClientPath);

      if (!global['prisma']) {
        global['prisma'] = new PrismaClient();
      }

      prisma = global['prisma'];

      let data = FactoryFunctions.build(attrs);
      const prismaOptions: Record<string, any> = {};

      const includes = buildPrismaIncludeFromAttrs(attrs);
      if (includes) prismaOptions.include = includes;

      if (hooks.beforeCreate) {
        data = hooks.beforeCreate(data);
      }

      const prismaModel = camelCase(modelName);

      let result: ReturnModelType = await prisma[prismaModel].create({
        data,
        ...prismaOptions,
      });

      if (hooks.afterCreate) {
        result = hooks.afterCreate(result);
      }

      return result;
    },
  };

  return FactoryFunctions;
}
