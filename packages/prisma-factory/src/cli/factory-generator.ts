import { GeneratorOptions } from '@prisma/generator-helper';
import { Project } from 'ts-morph';
import { parseEnvValue } from '@prisma/sdk';
import { promises } from 'fs';
// import { join } from 'path';
import { generateFactories } from '../generator/factories';

// const { mkdir, writeFile } = promises;
const DEFAULT_FILENAME = 'factories.ts';

export async function generate(options: GeneratorOptions) {
  const prismaClientOutput = options.otherGenerators.find(
    (gen) => gen.provider.value === 'prisma-client-js'
  )!.output!.value;

  const outputDir = parseEnvValue(options.generator.output!);

  // const fileName = config.outputName || DEFAULT_FILENAME;

  // console.log('hello', JSON.stringify(options.dmmf))

  try {
    // await mkdir(outputDir, { recursive: true });

    // await writeFile('./test.json', JSON.stringify(options.dmmf.datamodel));

    // const factoryFunctions = generateFactoryFunctions(options.dmmf);

    // await writeFile(join(outputDir, fileName), factoryFunctions);

    const project = new Project({ compilerOptions: { outDir: outputDir, declaration: true } });

    const factoryFile = project.createSourceFile('index.ts', undefined, { overwrite: true });
    generateFactories(factoryFile, options.dmmf, { client: prismaClientOutput });

    // Emit compiled source and type declarations
    await project.emit();
  } catch (e) {
    console.error('Error: unable to write files for Prisma Factory');
    throw e;
  }
}
