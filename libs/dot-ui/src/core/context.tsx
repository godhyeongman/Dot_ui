import React from 'react';

function createContext<valueT extends object | null>(contextValue: valueT) {
  const context = React.createContext<valueT>(contextValue);

  const Provider = getProvider<valueT>({ context, value: contextValue });
  const contextDispatch = getDispatcher<valueT>({ context });

  return { Provider, contextDispatch } as const;
}

type ProviderT<valueT> = {
  value: valueT;
  context: React.Context<valueT>;
};

type ContextDispatchT<valueT> = {
  context: React.Context<valueT>;
};

const getProvider =
  <propsT extends object | null>(props: ProviderT<propsT>) =>
  ({ children }: { children: React.ReactNode }) => {
    const { context: Context, value } = props;

    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

const getDispatcher =
  <propsT extends object | null>(props: ContextDispatchT<propsT>) =>
  () => {
    const { context } = props;

    const contextValue = React.useContext(context);

    return contextValue;
  };

export { createContext };
