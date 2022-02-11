import type { NextRouter } from 'next/router';
import {
  render as defaultRender,
  renderHook as defaultRenderHook,
} from '@prisma-factory/test-utils';
import {
  RenderHookOptions as DefaultRenderHookOptions,
  WrapperComponent,
} from '@testing-library/react-hooks';
import { RouterContext } from 'next/dist/shared/lib/router-context';

export * from '@testing-library/react';
export { handlers } from 'test/mocks/handlers';

export function customRender(
  ui: RenderUI,
  { wrapper, router, ...options }: RenderOptions = {}
): ReturnType<typeof defaultRender> {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    );
  }

  return defaultRender(ui, { wrapper, ...options });
}

export function renderHook<TProps, TResult>(
  hook: RenderHook<TProps, TResult>,
  { wrapper, router, ...options }: RenderHookOptions<TProps> = {}
): ReturnType<typeof defaultRenderHook> {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => (
      <RouterContext.Provider value={{ ...mockRouter, ...router }}>
        {children}
      </RouterContext.Provider>
    );
  }

  return defaultRenderHook<TProps, TResult>(hook, { wrapper, ...options });
}

export const mockRouter: NextRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  isReady: true,
  isLocaleDomain: false,
  isPreview: false,
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
};

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & {
  router?: Partial<NextRouter>;
};

type RenderHook<TProps, TResult> = (props: TProps) => TResult;
type RenderHookOptions<TProps> = DefaultRenderHookOptions<TProps> & {
  wrapper?: WrapperComponent<TProps> | undefined;
} & {
  router?: Partial<NextRouter>;
};
