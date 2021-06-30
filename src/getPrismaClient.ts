import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

export function getPrismaClient() {
  if (prisma) return prisma;

  prisma = new PrismaClient();
  return prisma;
}
