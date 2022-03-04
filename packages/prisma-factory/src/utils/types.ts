export type MaybeCallback<Type> = {
  [Property in keyof Type]: Type[Property] | (() => Type[Property]);
};
