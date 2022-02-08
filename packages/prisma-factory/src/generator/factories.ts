import { DMMF } from '@prisma/client/runtime';
import { SourceFile } from 'ts-morph';

/**
 * Adds the factory functions to the generated files.
 */
function addFactoryFunctions(sourceFile: SourceFile, dmmf: DMMF.Document) {
  return dmmf.datamodel.models.map((m) => addModelFactoryFunction(sourceFile, m));
}

/**
 * Adds the factory function for a given model in the Prisma schema.
 */
function addModelFactoryFunction(sourceFile: SourceFile, model: DMMF.Model) {
  const newFunction = sourceFile.addFunction({
    name: `create${model.name}Factory`,
  });

  newFunction.insertParameters(0, [
    { name: 'requiredAttrs', type: `Partial<${model.name}>`, hasQuestionToken: true },
  ]);

  newFunction.setBodyText(
    `return createFactory<Prisma.${model.name}CreateInput, ${model.name}>('${model.name}', requiredAttrs); `
  );

  newFunction.setReturnType(`CreateFactoryReturn<Prisma.${model.name}CreateInput, ${model.name}>`);

  newFunction.setIsExported(true);
}

/**
 * Adds the necessary imports to the generated files with the factory functions.
 */
function addImports(sourceFile: SourceFile, dmmf: DMMF.Document) {
  const modelNames = dmmf.datamodel.models.map((m) => m.name);
  const prismaImports = ['Prisma'].concat(modelNames);

  sourceFile.addImportDeclarations([
    {
      moduleSpecifier: 'prisma-factory',
      namedImports: ['createFactory', 'CreateFactoryReturn'],
    },
    {
      moduleSpecifier: '@prisma/client',
      namedImports: prismaImports,
    },
  ]);
}

/**
 * Generates factories for use in `prisma-factory`.
 */
export function generateFactories(sourceFile: SourceFile, dmmf: DMMF.Document) {
  addImports(sourceFile, dmmf);
  addFactoryFunctions(sourceFile, dmmf);
}
