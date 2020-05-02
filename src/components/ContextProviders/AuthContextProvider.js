import React, { useState, useEffect } from 'react';

import AuthContext from './../../context/AuthContext';

import Firebase from 'firebase/app';
import 'firebase/auth';

const AuthContextProvider = ({ children }) => {
  const [userID, setUserID] = useState(null);
  const [displayName, setDisplayName] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUserID(user.uid);
        setDisplayName(user.displayName);
        setIsLoading(false);
      }
    });
  }, []);

  const logout = () => {
    Firebase.auth().signOut();
    setUserID(null);
  };

  return (
    <AuthContext.Provider value={{ userID, displayName, isLoading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
