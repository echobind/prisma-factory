"use strict";
exports.__esModule = true;
exports.createTeamMemberFactory = void 0;
var prisma_factory_1 = require("prisma-factory");
function createTeamMemberFactory(requiredAttrs) {
    return (0, prisma_factory_1.createFactory)('TeamMember', requiredAttrs, { client: /Users/tundera / code / work / oss / prisma - factory / examples / remix / prisma / client });
}
exports.createTeamMemberFactory = createTeamMemberFactory;
