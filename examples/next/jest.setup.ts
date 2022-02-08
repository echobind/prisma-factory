import '@testing-library/jest-dom';

import { loadEnvConfig } from '@next/env';
import { setupServer } from 'msw/node';
import { handlers } from 'test-utils';

loadEnvConfig(__dirname, true, { info: () => null, error: console.error });

export const server = setupServer(...handlers);

// Establish API mocking before all tests.
beforeAll(async () => {
  server.listen();
});
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());
