import { getAttrs, ObjectWithMaybeCallbacks } from './utils/getAttrs';
import { camelCase } from 'camel-case';
import type {
  CreateFactoryReturn,
  CreateFactoryOptions,
  CreateFactoryHooks,
  MaybeCallback,
} from './lib/types';
import { getPrismaClient, buildPrismaIncludeFromAttrs } from './lib/prisma';

/**
 * Creates a new Prisma Factory based on a provided model name and set of default attributes.
 * @example
 *   const REQUIRED_ATTRIBUTES = { email: chance.email(), firstName: 'Dave', password: 'test1234' };
 *   createFactory<Prisma.UserCreateInput>('User', REQUIRED_ATTRIBUTES);
 */
export function createFactory<CreateInputType, ReturnModelType>(
  modelName: string,
  defaultAttrs: ObjectWithMaybeCallbacks<CreateInputType>,
  options: CreateFactoryOptions = {},
  hooks: CreateFactoryHooks<CreateInputType, ReturnModelType> = {}
): CreateFactoryReturn<CreateInputType, ReturnModelType> {
  const build = (attrs: Partial<CreateInputType> = {}) => {
    const mappedAttrs = getAttrs(defaultAttrs);
    const data = {
      ...mappedAttrs,
      ...attrs,
    } as CreateInputType;

    return data;
  };

  const create = async (attrs: Partial<CreateInputType> = {}) => {
    const prismaClientPath = options.client ?? '@prisma/client';
    const { PrismaClient } = await getPrismaClient(prismaClientPath);

    if (!global['prisma']) {
      global['prisma'] = new PrismaClient();
    }

    prisma = global['prisma'];

    let data = build(attrs);
    const prismaOptions: Record<string, any> = {};

    const includes = buildPrismaIncludeFromAttrs(attrs);
    if (includes) prismaOptions.include = includes;

    if (hooks.beforeCreate) {
      data = hooks.beforeCreate(data);
    }

    const prismaModel = camelCase(modelName);

    let result = await prisma[prismaModel].create({
      data,
      ...prismaOptions,
    });

    if (hooks.afterCreate) {
      result = hooks.afterCreate(result);
    }

    return result as ReturnModelType;
  };

  return {
    build,
    create,
  };
}
