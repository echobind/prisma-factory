import { createFactory } from "../src/createFactory";
// import prisma from "@prisma/client";
import { getPrismaClient } from "../src/getPrismaClient";

const mockPrismaClient = jest.fn();
jest.mock("@prisma/client", () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return mockPrismaClient;
    }),
  };
});
const prisma = getPrismaClient();

interface FakeUserType {
  firstName: string;
  lastName: string;
}

describe("createFactory", () => {
  describe("build", () => {
    describe("with default attrs", () => {
      it("returns a proper object with build and create functions", () => {
        const Factory = createFactory("User");
        expect(typeof Factory.build).toEqual("function");
        expect(typeof Factory.create).toEqual("function");
      });

      it("returns default attributes", () => {
        const defaults = {
          firstName: "Dave",
          lastName: "Grohl",
        };

        const Factory = createFactory<FakeUserType>("User", defaults);

        const user = Factory.build();
        expect(user.firstName).toEqual(defaults.firstName);
        expect(user.lastName).toEqual(defaults.lastName);
      });

      it("returns default attributes", () => {
        const defaults = {
          firstName: "Dave",
          lastName: "Grohl",
        };

        const Factory = createFactory<FakeUserType>("User", defaults);

        const user = Factory.build({ firstName: "Violet" });
        expect(user.firstName).toEqual("Violet");
        expect(user.lastName).toEqual(defaults.lastName);
      });
    });
  });

  describe("create", () => {
    describe("with default attributes", () => {
      it.todo("calls prisma.create with the correct arguments", async () => {
        const userCreateMock = jest.fn();
        mockPrismaClient.mockImplementationOnce(() => {
          return {
            user: {
              create: userCreateMock,
            },
          };
        });

        const defaults = {
          firstName: "Dave",
          lastName: "Grohl",
        };

        const Factory = createFactory<FakeUserType>("User", defaults);

        const user = await Factory.create();
      });

      it.todo("camelcases the prisma model name");
      it.todo("adds includes");
      it.todo("calls beforeCreate hook");
    });
  });
});
