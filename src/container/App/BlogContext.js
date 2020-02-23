import React, { createContext, useContext, useReducer } from 'react';

export const BlogContext = createContext();

export const BlogsProvider = ({reducer, initialState, children}) =>(
  <BlogContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </BlogContext.Provider>
);
export const useStateValue = () => useContext(BlogContext);