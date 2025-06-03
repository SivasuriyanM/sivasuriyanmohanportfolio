import React, { createContext, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ value, children }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export const useAppContext = () => useContext(AppContext);