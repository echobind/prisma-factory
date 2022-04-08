import type { ObjectWithMaybeCallbacks } from '../lib/types';

export const getAttrs = <T>(attrs: ObjectWithMaybeCallbacks<T>): T => {
  return Object.fromEntries(
    Object.entries(attrs).map(([key, value]) => {
      if (typeof value === 'object') {
        // recursively evaluate nested objects
        return [key, getAttrs(value as ObjectWithMaybeCallbacks<T[keyof T]>)];
      }

      if (typeof value === 'function') {
        const result = value();

        if (typeof result === 'object') {
          // recursively evaluate nested objects
          return [key, getAttrs(result as ObjectWithMaybeCallbacks<T[keyof T]>)];
        }

        return [key, result];
      }
      return [key, value];
    })
  ) as T;
};
