import { DMMF } from '@prisma/client/runtime';
import { SourceFile } from 'ts-morph';

type GenerateFactoriesOptions = {
  client: string;
};

/**
 * Adds the factory functions to the generated files.
 */
function addFactoryFunctions(
  sourceFile: SourceFile,
  dmmf: DMMF.Document,
  options: GenerateFactoriesOptions
) {
  return dmmf.datamodel.models.map((m) => addModelFactoryFunction(sourceFile, m, options));
}

/**
 * Adds the factory function for a given model in the Prisma schema.
 */
function addModelFactoryFunction(
  sourceFile: SourceFile,
  model: DMMF.Model,
  options: GenerateFactoriesOptions
) {
  const createInputTypes = `Prisma.${model.name}CreateInput | Prisma.${model.name}UncheckedCreateInput`;

  const newFunction = sourceFile.addFunction({
    name: `create${model.name}Factory`,
  });

  newFunction.insertParameters(0, [
    {
      name: 'requiredAttrs',
      type: `ObjectWithMaybeCallbacks<Partial<${createInputTypes}>>`,
      hasQuestionToken: true,
    },
  ]);

  newFunction.insertParameters(1, [
    {
      name: 'options',
      type: `CreateFactoryOptions`,
      hasQuestionToken: true,
    },
  ]);

  newFunction.insertParameters(2, [
    {
      name: 'hooks',
      type: `CreateFactoryHooks<${createInputTypes}, ${model.name}>`,
      hasQuestionToken: true,
    },
  ]);

  newFunction.setBodyText(
    `return createFactory<${createInputTypes}, ${model.name}>('${model.name}', requiredAttrs, { ...options, client: '${options.client}' }, hooks); `
  );

  newFunction.setReturnType(`CreateFactoryReturn<${createInputTypes}, ${model.name}>`);

  newFunction.setIsExported(true);
}

/**
 * Adds the necessary imports to the generated files with the factory functions.
 */
function addImports(
  sourceFile: SourceFile,
  dmmf: DMMF.Document,
  options: GenerateFactoriesOptions
) {
  const modelNames = dmmf.datamodel.models.map((m) => m.name);
  const prismaImports = ['Prisma'].concat(modelNames);

  sourceFile.addImportDeclarations([
    {
      moduleSpecifier: 'prisma-factory',
      namedImports: ['CreateFactoryOptions', 'CreateFactoryHooks', 'CreateFactoryReturn'],
      isTypeOnly: true,
    },
    {
      moduleSpecifier: 'prisma-factory',
      namedImports: ['ObjectWithMaybeCallbacks'],
      isTypeOnly: true,
    },
    {
      moduleSpecifier: 'prisma-factory',
      namedImports: ['createFactory'],
    },
    {
      moduleSpecifier: options.client,
      namedImports: prismaImports,
    },
  ]);
}

/**
 * Generates factories for use in `prisma-factory`.
 */
export function generateFactories(
  sourceFile: SourceFile,
  dmmf: DMMF.Document,
  options: GenerateFactoriesOptions
) {
  addImports(sourceFile, dmmf, { client: options.client ?? '@prisma/client' });
  addFactoryFunctions(sourceFile, dmmf, { client: options.client ?? '@prisma/client' });
}
