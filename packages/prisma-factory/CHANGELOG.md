# prisma-factory

## 0.1.11

### Patch Changes

- Simplify build and create logic by removing deep callbacks.

## 0.1.10

### Patch Changes

- Undo erroneous placement of generated types in package dist.

## 0.1.9

### Patch Changes

- Relocate generated output of `prisma-factory` to its dist directory.

## 0.1.8

### Patch Changes

- Patch missing generics in new create hook params

## 0.1.7

### Patch Changes

- [`9d12f63`](https://github.com/echobind/prisma-factory/commit/9d12f63c1082e57335633f344d705230675bd03c) Thanks [@tundera](https://github.com/tundera)! - Update API of `createFactory` to allow before/after hooks to be passed in.

## 0.1.5

### Patch Changes

- Move execution logic of input attributes to build method instead of create.

## 0.1.4

### Patch Changes

- Add support for passing callbacks to `create` method attributes on factories

## 0.1.3

### Patch Changes

- Allow usage of global prisma client when available to prevent overloading clients in test/development.

## 0.1.2

### Patch Changes

- Clean up import logic around prisma client imports in generated factory functions.

## 0.1.1

### Patch Changes

- [`70d96de`](https://github.com/echobind/prisma-factory/commit/70d96de4aedc9daf2509fb1c92fae6c432037c14) Thanks [@tundera](https://github.com/tundera)! - Ensure `createFactory` function uses correct parameter types of `requiredAttrs` (`Prisma.ModelCreaeteInput`, not `Prisma.Model`)

## 0.1.0

### Minor Changes

- Initial release
