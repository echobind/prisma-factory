import type { MaybeCallback } from "prisma-factory";
import { CreateFactoryReturn } from "prisma-factory";
import { Prisma, User } from "../client";
export declare function createUserFactory(requiredAttrs?: Partial<MaybeCallback<Prisma.UserCreateInput>>): CreateFactoryReturn<MaybeCallback<Prisma.UserCreateInput>, User>;
