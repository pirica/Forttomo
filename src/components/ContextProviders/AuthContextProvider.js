import React, { useState, useEffect } from 'react';

import AuthContext from './../../context/AuthContext';

import Firebase from 'firebase/app';
import 'firebase/auth';

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);
  const [userID, setUserID] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUsername(user.email);
        setUserID(user.uid);
        setIsLoading(false);
      }
    });
  }, []);

  const logout = () => {
    Firebase.auth().signOut();
    setUsername(null);
    setUserID(null);
  };

  return (
    <AuthContext.Provider value={{ username, userID, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
