import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../container/App/AuthContext';

function Navigation () {

  const { isAuth, authLogout } = useContext(AuthContext)
  console.log('isAuth', isAuth);
  const logout = () => {
    authLogout();
  }

  return (
    <nav className="border-b border-gray-200 p-4 mb-6">
      <ul className="flex">
        <li className="p-2">
          <Link to="/">Home</Link>
        </li>
        <li className="p-2">
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className="p-2">
          <button onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;