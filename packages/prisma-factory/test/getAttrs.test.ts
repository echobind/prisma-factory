import { getAttrs, ObjectWithMaybeCallbacks } from './../src/utils/getAttrs';
import Chance from 'chance';

const chance = new Chance();

describe('getAttrs', () => {
  it('should return the mapped attrs with callbacks executed', () => {
    interface Attrs {
      foo: string;
      bar: number;
      baz: string;
    }

    const attrs: Attrs = {
      foo: chance.string(),
      bar: chance.natural(),
      baz: chance.name(),
    };

    const attrsWithCallbacks: ObjectWithMaybeCallbacks<Attrs> = {
      foo: () => attrs.foo,
      bar: () => attrs.bar,
      baz: () => attrs.baz,
    }
    const actualAttrs = getAttrs(attrsWithCallbacks);

    expect(actualAttrs).toEqual(attrs);
  });

  it('should return the mapped attrs with callbacks executed recursively', () => {
    interface Attrs {
      foo: string;
      bar: number;
      baz: string;
      yeet: {
        foo2: string;
        bar2: number;
        baz2: string;
      }
    }

    const attrs: Attrs = {
      foo: chance.string(),
      bar: chance.natural(),
      baz: chance.name(),
      yeet: {
        foo2: chance.string(),
        bar2: chance.natural(),
        baz2: chance.name(),
      }
    };

    const attrsWithCallbacks: ObjectWithMaybeCallbacks<Attrs> = {
      foo: () => attrs.foo,
      bar: () => attrs.bar,
      baz: () => attrs.baz,
      yeet: () => ({
        foo2: () => attrs.yeet.foo2,
        bar2: () => attrs.yeet.bar2,
        baz2: () => attrs.yeet.baz2,
      })
    }

    const actualAttrs = getAttrs(attrsWithCallbacks);

    expect(actualAttrs).toEqual(attrs);
  });
});