module.exports = {
  extends: ['next', 'prettier'],
  settings: {
    next: {
      rootDir: ['examples/*/', 'packages/*/', 'internal/*/*', 'website'],
    },
  },
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
  },
};
