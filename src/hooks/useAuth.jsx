import React, { useState, useContext, createContext, useEffect } from 'react';
import { apiLogin, apiLogout, apiIsLoggedIn, apiVerify } from '../api/auth';
import { useLocation } from 'react-router-dom';

export const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const runIsLoggedIn = async () => {
      await isLoggedIn();
    };
    runIsLoggedIn();
  }, [location.pathname]);

  const isLoggedIn = async () => {
    setIsAuthenticating(true);

    const res = await apiIsLoggedIn();

    if (res.status !== 'success') {
      setUser(null);
    }

    if (res.status === 'success') {
      setUser(res.data);
    }
    setIsAuthenticating(false);
  };

  const verify = async (token) => {
    try {
      const res = await apiVerify(token);

      if (res.status !== 'success') {
        setUser(null);
      }

      if (res.status === 'success') {
        setUser(res.data);
      }

      return res;
    } catch (error) {
      return error;
    }
  };

  const login = async (email) => {
    try {
      const res = await apiLogin(email);

      return res;
    } catch (error) {
      return error;
    }
  };

  const logout = async (history) => {
    try {
      const res = await apiLogout();
      setUser(null);
      history.push('/login');
      return res;
    } catch (error) {
      setUser(null);
      history.push('/login');
      return error;
    }
  };

  return {
    user,
    isAuthenticating,
    isLoggedIn,
    login,
    logout,
    verify,
  };
};
