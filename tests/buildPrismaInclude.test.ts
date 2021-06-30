import { buildPrismaInclude } from "../src/buildPrismaInclude";

describe("buildPrismaInclude", () => {
  describe("no relations", () => {
    it("returns undefined", () => {
      const attrs = { firstName: "Dave", lastName: "Grohl" };
      const result = buildPrismaInclude(attrs);

      expect(result).toBeUndefined();
    });
  });

  describe("invalid relation", () => {
    it("returns undefined", () => {
      const attrs = {
        firstName: "Dave",
        lastName: "Grohl",
        guitar: { isProbably: "black" },
      };
      const result = buildPrismaInclude(attrs);

      expect(result).toBeUndefined();
    });
  });

  describe("connect relation", () => {
    it("adds the include", () => {
      const attrs = {
        firstName: "Dave",
        lastName: "Grohl",
        guitar: { connect: { id: 2 } },
      };

      const result = buildPrismaInclude(attrs);

      expect(result.guitar).toEqual(true);
    });
  });

  describe("create relation", () => {
    it("adds the include", () => {
      const attrs = {
        firstName: "Dave",
        lastName: "Grohl",
        guitar: { create: { id: 2 } },
      };

      const result = buildPrismaInclude(attrs);

      expect(result.guitar).toEqual(true);
    });
  });
});
