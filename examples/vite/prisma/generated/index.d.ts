import type { MaybeCallback } from "prisma-factory";
import { CreateFactoryReturn } from "prisma-factory";
import { Prisma, TeamMember } from "../client";
export declare function createTeamMemberFactory(requiredAttrs?: Partial<MaybeCallback<Prisma.TeamMemberCreateInput>>): CreateFactoryReturn<MaybeCallback<Prisma.TeamMemberCreateInput>, TeamMember>;
