// UserContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const initialUserContext: UserContextProps = {
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
};

export const UserContext = createContext<UserContextProps>(initialUserContext);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean);

  const login = () => {
    setIsLoggedIn(true);
    console.log('Logged In')
  };

  const logout = () => {
    setIsLoggedIn(false);
    console.log('Logged Out')
  };

  const contextValue: UserContextProps = {
    isLoggedIn,
    login,
    logout,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
