import React, { useContext } from 'react';
import { AuthContext } from '../App/AuthContext';

import H1 from '../../components/H1';

function SignIn() {

  const { isAuth, authLogin } = useContext(AuthContext);

  const logmeIn = () => {
    console.log('toto', isAuth);
    authLogin({
      login: 'overblog',
      password: 'overblog',
    });
  }
  return (
    <div className="container mx-auto">
      <div className="p-8 mx-auto text-center w-2/3 border border-gray-200 rounded-md">
        <H1>Connexion</H1>
        <button onClick={logmeIn}>test</button>
      </div>
    </div>
  )
}

export default SignIn;