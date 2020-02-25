import React, { useState, createContext } from 'react';
import { login } from '../../helpers/auth';

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const authLogin = credentials => login(credentials)
    .then(setIsAuth(true))
    .catch(error => {
      console.log('error', error);
      setIsAuth(false);
    });

  const authLogout = () => {
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, authLogin, authLogout }}>
      {children}
    </AuthContext.Provider>
  )
}