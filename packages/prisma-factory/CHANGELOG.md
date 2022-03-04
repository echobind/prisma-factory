# prisma-factory

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
