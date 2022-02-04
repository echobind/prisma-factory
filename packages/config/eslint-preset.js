module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: ['examples/*/', 'packages/*/', 'docs'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
