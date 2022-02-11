import { render as defaultRender } from '@testing-library/react';
import {
  renderHook as defaultRenderHook,
  RenderHookOptions as DefaultRenderHookOptions,
  WrapperComponent,
} from '@testing-library/react-hooks';
import { ChakraProvider } from '@chakra-ui/react';

export * from '@testing-library/react';

export function render(
  ui: RenderUI,
  { wrapper, ...options }: RenderOptions = {}
): ReturnType<typeof defaultRender> {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;
  }

  return defaultRender(ui, { wrapper, ...options });
}

export function renderHook<TProps, TResult>(
  hook: RenderHook<TProps, TResult>,
  { wrapper, ...options }: RenderHookOptions<TProps> = {}
) {
  if (!wrapper) {
    // Add a default context wrapper if one isn't supplied from the test
    // eslint-disable-next-line react/display-name
    wrapper = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;
  }

  return defaultRenderHook<TProps, TResult>(hook, { wrapper, ...options });
}

export type DefaultParams = Parameters<typeof defaultRender>;
export type RenderUI = DefaultParams[0];
export type RenderOptions = DefaultParams[1];

export type RenderHook<TProps, TResult> = (props: TProps) => TResult;
export type RenderHookOptions<TProps> = DefaultRenderHookOptions<TProps> & {
  wrapper?: WrapperComponent<TProps> | undefined;
};
