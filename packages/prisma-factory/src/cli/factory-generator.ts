import { GeneratorOptions } from '@prisma/generator-helper';
import { parseEnvValue } from '@prisma/internals';
import { resolve } from 'path';
import { Project } from 'ts-morph';

import { generateFactories } from '../generator/factories';

export async function generate(options: GeneratorOptions) {
  const prismaClientOutput = options.otherGenerators.find(
    (gen) => gen.provider.value === 'prisma-client-js'
  )!.output!.value;

  const outputDir = parseEnvValue(options.generator.output!);

  try {
    const project = new Project({ compilerOptions: { outDir: outputDir, declaration: true } });

    const factoryFile = project.createSourceFile('index.ts', undefined, { overwrite: true });

    generateFactories(factoryFile, options.dmmf, {
      client:
        prismaClientOutput === '@prisma/client'
          ? '@prisma/client'
          : resolve(outputDir, prismaClientOutput),
    });

    // Emit compiled source and type declarations
    await project.emit();
  } catch (e) {
    console.error('Error: unable to write files for Prisma Factory');
    throw e;
  }
}
