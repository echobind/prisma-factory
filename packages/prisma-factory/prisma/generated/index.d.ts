import { CreateFactoryReturn } from "prisma-factory";
import { Prisma, User } from "../client";
export declare function createUserFactory(requiredAttrs?: Partial<Prisma.UserCreateInput>): CreateFactoryReturn<Prisma.UserCreateInput, User>;
