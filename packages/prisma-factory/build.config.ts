import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    // bundling
    'src/index',
    'src/generator',
  ],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
});
