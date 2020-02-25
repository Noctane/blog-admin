import React, { useRef, useContext, useEffect } from 'react';
import { AuthContext } from '../App/AuthContext';
import { useHistory } from 'react-router-dom';

import H1 from '../../components/H1';
import Input from '../../components/Input';

function SignIn() {
  const history = useHistory();
  const { isAuth, authLogin, isLoading } = useContext(AuthContext);
  const loginRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    if(isAuth) {
      history.push('/blogs')
    }
  }, [history, isAuth]);

  const logmeIn = () => {
    const creds = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }
    authLogin(creds);
  }
  return (
    <div className="container mx-auto">
      <div className="p-8 mx-auto w-2/3 text-center border border-gray-200 rounded-md">
        <H1>Connexion</H1>
        <form onSubmit={logmeIn}>
          <label className="block mt-2" htmlFor="login">Nom d'utilisateur</label>
          <Input ref={loginRef} name="login" type="text" />
          <label className="block mt-2" htmlFor="password">Mot de passe</label>
          <Input ref={passwordRef} name="password" type="password" />
        </form>
        <button type="submit" className="mt-4 bg-blue-500 py-2 px-4 rounded-md text-white" onClick={logmeIn}>Connexion</button>
        {isLoading && <p>Loading...</p>}
      </div>
    </div>
  )
}

export default SignIn;