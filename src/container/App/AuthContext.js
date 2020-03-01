import React, { useState, useEffect, createContext } from 'react';
import { login, logout } from '../../helpers/auth';

export const AuthContext = createContext({});

export default function Auth({ children }) {

  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // DO NO STORE SESSION DATA IN LOCALSTORAGE, THIS IS JUST A TEST!!
    // Simulate session with local storage, it was annoying to log in at every hot reload
    const session = localStorage.getItem('token');
    if (Date.now() < parseInt(session, 10) + 300000) {
      setIsAuth(true);
    } else {
      localStorage.clear();
      setIsAuth(false);
    }
  }, []);

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
    logout()
      .then(setTimeout(() => {
        setIsAuth(false)
        setIsLoading(false)
      }, 2000)
    );
  }

  return (
    <AuthContext.Provider value={{ isAuth, authLogin, authLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  )
}