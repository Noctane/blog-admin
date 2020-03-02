import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../App/AuthContext';
import { useHistory } from 'react-router-dom';

import H1 from '../../components/H1';
import Input from '../../components/Input';
import Button from '../../components/Button';

function SignIn() {

  const history = useHistory();
  const { isAuth, authLogin, isLoading } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    login: '',
    password: '',
  });

  useEffect(() => {
    // look for an auth user
    if(isAuth) {
      history.push('/blogs')
    }
  }, [history, isAuth]);

  const onInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  const logmeIn = (e) => {
    e.preventDefault();
    const creds = {
      login: credentials.login,
      password: credentials.password,
    }
    authLogin(creds);
  }

  return (
    <div className="container mx-auto">
      <div className="p-8 mx-auto w-2/3 text-center bg-white border border-gray-200 rounded-md">
        <H1>Connexion</H1>
        <form onSubmit={logmeIn}>
          <label className="block mt-2" htmlFor="login">Nom d'utilisateur</label>
          <Input value={credentials.login || ''} name="login" type="text" onInputChange={onInputChange} />
          <label className="block mt-2" htmlFor="password">Mot de passe</label>
          <Input value={credentials.password || ''} name="password" type="password" onInputChange={onInputChange} />
          <Button type="submit" className="mt-4 mx-auto" onClick={logmeIn}>Connexion</Button>
          {isLoading && <p>Loading...</p>}
        </form>
      </div>
    </div>
  )
}

export default SignIn;