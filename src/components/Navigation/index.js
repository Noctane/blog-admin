import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../container/App/AuthContext';
// Components
import Button from '../Button';

function Navigation() {

  const { isAuth, authLogout, isLoading } = useContext(AuthContext)
  const logout = () => {
    authLogout();
  }

  return (
    <nav className="border-b border-gray-200 bg-white p-4 mb-6">
      <ul className="flex items-center">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/blogs">Blogs</Link>
        </li>
        {isAuth &&
          <li className="p-2 ">
            <Button bgColor="red" busy={isLoading} onButtonClick={logout}>Déconnexion</Button>
          </li>
        }
      </ul>
    </nav>
  )
}

export default Navigation;