import type { CreateFactoryOptions, CreateFactoryHooks, CreateFactoryReturn } from "prisma-factory";
import { Prisma, Organization, Profile, User, Product, Category, Proposal, Client, Project, AvailableSystem, System, Part, AdditionalService } from "/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client";
export declare function createOrganizationFactory(requiredAttrs?: Partial<Prisma.OrganizationCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.OrganizationCreateInput, Organization>): CreateFactoryReturn<Prisma.OrganizationCreateInput, Organization>;
export declare function createProfileFactory(requiredAttrs?: Partial<Prisma.ProfileCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.ProfileCreateInput, Profile>): CreateFactoryReturn<Prisma.ProfileCreateInput, Profile>;
export declare function createUserFactory(requiredAttrs?: Partial<Prisma.UserCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.UserCreateInput, User>): CreateFactoryReturn<Prisma.UserCreateInput, User>;
export declare function createProductFactory(requiredAttrs?: Partial<Prisma.ProductCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.ProductCreateInput, Product>): CreateFactoryReturn<Prisma.ProductCreateInput, Product>;
export declare function createCategoryFactory(requiredAttrs?: Partial<Prisma.CategoryCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.CategoryCreateInput, Category>): CreateFactoryReturn<Prisma.CategoryCreateInput, Category>;
export declare function createProposalFactory(requiredAttrs?: Partial<Prisma.ProposalCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.ProposalCreateInput, Proposal>): CreateFactoryReturn<Prisma.ProposalCreateInput, Proposal>;
export declare function createClientFactory(requiredAttrs?: Partial<Prisma.ClientCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.ClientCreateInput, Client>): CreateFactoryReturn<Prisma.ClientCreateInput, Client>;
export declare function createProjectFactory(requiredAttrs?: Partial<Prisma.ProjectCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.ProjectCreateInput, Project>): CreateFactoryReturn<Prisma.ProjectCreateInput, Project>;
export declare function createAvailableSystemFactory(requiredAttrs?: Partial<Prisma.AvailableSystemCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.AvailableSystemCreateInput, AvailableSystem>): CreateFactoryReturn<Prisma.AvailableSystemCreateInput, AvailableSystem>;
export declare function createSystemFactory(requiredAttrs?: Partial<Prisma.SystemCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.SystemCreateInput, System>): CreateFactoryReturn<Prisma.SystemCreateInput, System>;
export declare function createPartFactory(requiredAttrs?: Partial<Prisma.PartCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.PartCreateInput, Part>): CreateFactoryReturn<Prisma.PartCreateInput, Part>;
export declare function createAdditionalServiceFactory(requiredAttrs?: Partial<Prisma.AdditionalServiceCreateInput>, options?: CreateFactoryOptions, hooks?: CreateFactoryHooks<Prisma.AdditionalServiceCreateInput, AdditionalService>): CreateFactoryReturn<Prisma.AdditionalServiceCreateInput, AdditionalService>;
