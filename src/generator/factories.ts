import { DMMF } from '@prisma/generator-helper';
import { printNode, SourceFile } from 'ts-morph';

function addFactoryFunctions(sourceFile: SourceFile, dmmf: DMMF.Document) {
  return dmmf.datamodel.models.map((m) => addFactoryFunction(sourceFile, m));
}

/**
 * Adds the factory function to the file.
 */
function addFactoryFunction(sourceFile: SourceFile, model: DMMF.Model) {
  const newFunction = sourceFile.addFunction({
    name: `create${model.name}Factory`,
  });

  newFunction.insertParameters(0, [{ name: 'requiredAttrs', type: `Partial<${model.name}>` }]);

  newFunction.setBodyText(
    `return createFactory<Prisma.${model.name}CreateInput, ${model.name}>('${model.name}', requiredAttrs); `
  );

  newFunction.setReturnType(`CreateFactoryReturn<Prisma.${model.name}CreateInput, ${model.name}>`);

  newFunction.setIsExported(true);
}

/**
 * Adds necessary imports to the file
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
 * Generates factories for use in prisma-factory.
 */
export function generateFactories(sourceFile: SourceFile, dmmf: DMMF.Document) {
  addImports(sourceFile, dmmf);
  addFactoryFunctions(sourceFile, dmmf);
}
