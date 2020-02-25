import React, { useState, createContext } from 'react';
import { login } from '../../helpers/auth';

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const authLogin = credentials => {
    setIsLoading(true)
    login(credentials)
      .then(setTimeout(() => {
        setIsAuth(true);
        setIsLoading(false);
      }, 2000))
      .catch(error => {
        setTimeout(() => {
          setIsAuth(false);
          setIsLoading(false);
        }, 2000)
      });
  }

  const authLogout = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsAuth(false)
      setIsLoading(false)
    }, 2000)
  }

  return (
    <AuthContext.Provider value={{ isAuth, authLogin, authLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}