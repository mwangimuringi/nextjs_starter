import React from 'react';
import { useAuth } from '@commercehub/react-components';

export const AuthProvider: React.FC = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth();
  console.log('isAuthenticated', isAuthenticated);
  console.log('login', login);
  console.log('logout', logout);

  // TODO: Add a loading state
  // TODO: Add a error state
  // TODO: Add a logout button
  // TODO: Add a login button
  // TODO: Add a logout button
  // TODO: Add a login button

  

  return (
    <div>
      <div>
        {isAuthenticated ? (
            <div>Authenticated</div>
        ) : (
          <div>Not Authenticated</div>
        )}
      </div>
      <div>
        {isAuthenticated ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </div>
      <hr />
      <div>
        <h2>AuthProvider</h2>
        <p>This component is used to wrap the entire application.</p>
      </div>
      {children}
    </div>
  );
};