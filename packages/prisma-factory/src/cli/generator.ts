import { generatorHandler } from '@prisma/generator-helper';

import { generate } from './factory-generator';

generatorHandler({
  onManifest: () => ({
    defaultOutput: 'node_modules/.prisma-factory/factories',
    prettyName: 'Prisma Factories',
    requiresGenerators: ['prisma-client-js'],
  }),
  onGenerate: generate,
});
