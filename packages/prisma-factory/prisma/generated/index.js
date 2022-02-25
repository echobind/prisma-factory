"use strict";
exports.__esModule = true;
exports.createUserFactory = void 0;
var prisma_factory_1 = require("prisma-factory");
function createUserFactory(requiredAttrs) {
    return (0, prisma_factory_1.createFactory)('User', requiredAttrs, { client: /Users/tundera / code / work / oss / prisma - factory / packages / prisma - factory / prisma / client });
}
exports.createUserFactory = createUserFactory;
