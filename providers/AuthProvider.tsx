import React from 'react';
import { useAuth } from '@commercehub/react-components';

export const AuthProvider: React.FC = ({ children }) => {
  const { isAuthenticated, login, logout } = useAuth();

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
      {children}
    </div>
  );
};