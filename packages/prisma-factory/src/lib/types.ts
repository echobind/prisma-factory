export type ObjectWithMaybeCallbacks<Type> = {
  [Property in keyof Type]: Type[Property] extends keyof any
    ? Type[Property] | (() => Type[Property])
    : ObjectWithMaybeCallbacks<Type[Property]> | (() => ObjectWithMaybeCallbacks<Type[Property]>);
};

export interface CreateFactoryOptions {
  client?: string;
}

export interface CreateFactoryHooks<CreateInputType, ReturnModelType> {
  beforeCreate?: (attrs: CreateInputType) => CreateInputType;
  afterCreate?: (data: ReturnModelType) => ReturnModelType;
}

export interface CreateFactoryReturn<CreateInputType, ReturnModelType> {
  build: (attrs?: Partial<CreateInputType>) => CreateInputType;
  create: (attrs?: Partial<CreateInputType>) => Promise<ReturnModelType>;
}
