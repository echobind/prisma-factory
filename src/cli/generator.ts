import { generatorHandler } from '@prisma/generator-helper';

import { generate } from './factory-generator';

generatorHandler({
  onManifest: () => ({
    // defaultOutput: './factories',
    defaultOutput: 'node_modules/@generated/prisma-factory',
    prettyName: 'Prisma Factories',
    requiresGenerators: ['prisma-client-js'],
  }),
  onGenerate: generate,
});
