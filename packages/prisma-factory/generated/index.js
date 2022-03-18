"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.createAdditionalServiceFactory = exports.createPartFactory = exports.createSystemFactory = exports.createAvailableSystemFactory = exports.createProjectFactory = exports.createClientFactory = exports.createProposalFactory = exports.createCategoryFactory = exports.createProductFactory = exports.createUserFactory = exports.createProfileFactory = exports.createOrganizationFactory = void 0;
var prisma_factory_1 = require("prisma-factory");
function createOrganizationFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Organization', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createOrganizationFactory = createOrganizationFactory;
function createProfileFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Profile', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createProfileFactory = createProfileFactory;
function createUserFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('User', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createUserFactory = createUserFactory;
function createProductFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Product', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createProductFactory = createProductFactory;
function createCategoryFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Category', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createCategoryFactory = createCategoryFactory;
function createProposalFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Proposal', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createProposalFactory = createProposalFactory;
function createClientFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Client', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createClientFactory = createClientFactory;
function createProjectFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Project', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createProjectFactory = createProjectFactory;
function createAvailableSystemFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('AvailableSystem', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createAvailableSystemFactory = createAvailableSystemFactory;
function createSystemFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('System', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createSystemFactory = createSystemFactory;
function createPartFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('Part', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createPartFactory = createPartFactory;
function createAdditionalServiceFactory(requiredAttrs, options, hooks) {
    return (0, prisma_factory_1.createFactory)('AdditionalService', requiredAttrs, __assign(__assign({}, options), { client: '/Users/tundera/code/work/clients/clerestory/clerestory-web/node_modules/@prisma/client' }), hooks);
}
exports.createAdditionalServiceFactory = createAdditionalServiceFactory;
