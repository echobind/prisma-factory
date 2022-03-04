import type { PrismaClient as PrismaClientType } from '@prisma/client';

declare global {
  var prisma: PrismaClientType | undefined;
}

/**
 * Gets an instance of the Prisma Client if instantiated globally and creates one if not.
 *
 * @param client The path to the generated Prisma client
 */
export const getPrismaClient = async (client: string) => {
  const { PrismaClient } = await import(client);

  const prisma = global.prisma || new PrismaClient();

  if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

  return prisma as PrismaClientType;
};

/**
 * Builds up a Prisma include object based on the presence of connect/create keys
 */
export function buildPrismaIncludeFromAttrs(attrs: Record<string, any>) {
  const include = Object.keys(attrs).reduce((prev, curr) => {
    const value = attrs[curr];
    const isObject = typeof value === 'object' && value !== null;
    const isRelation = isObject && Object.keys(value).find((v) => v.match(/connect|create/));

    if (isRelation) {
      prev[curr] = true;
    }

    return prev;
  }, Object.create(null));

  const hasInclude = Object.keys(include).length;
  return hasInclude ? include : undefined;
}
