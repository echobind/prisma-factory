import type { ObjectWithMaybeCallbacks } from '../lib/types';

const isNestedObject = (value: unknown): boolean => {
  if (value instanceof Date) {
    return false;
  }
  return typeof value === 'object';
};

export const getAttrs = <T>(attrs: ObjectWithMaybeCallbacks<T>): T => {
  return Object.fromEntries(
    Object.entries(attrs).map(([key, value]) => {
      if (isNestedObject(value)) {
        // recursively evaluate nested objects
        return [key, getAttrs(value as ObjectWithMaybeCallbacks<T[keyof T]>)];
      }

      if (typeof value === 'function') {
        const result = value();

        if (isNestedObject(result)) {
          // recursively evaluate nested objects
          return [key, getAttrs(result as ObjectWithMaybeCallbacks<T[keyof T]>)];
        }

        return [key, result];
      }
      return [key, value];
    })
  ) as T;
};
