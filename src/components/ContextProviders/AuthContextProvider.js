import React, { useState, useEffect } from 'react';

import AuthContext from './../../context/AuthContext';

import Firebase from 'firebase/app';
import 'firebase/auth';

const AuthContextProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUsername(user.email);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
