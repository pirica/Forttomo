import React, { useState } from 'react';

import Firebase from 'firebase/app';
import 'firebase/auth';
import AuthInput from './AuthInput';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = e => {
    e.preventDefault();

    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(error => {
        const { code } = error;

        switch (code) {
          case 'auth/wrong-password':
            setIsPasswordValid(false);
            break;
          case 'auth/invalid-email':
          case 'auth/user-not-found':
          default:
            setIsEmailValid(false);
            break;
        }
      });
  };

  const updateEmail = value => {
    setEmail(value);
  };

  const updatePassword = value => {
    setPassword(value);
  };

  return (
    <div className='login_view'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          name='Email'
          type='text'
          value={email}
          onChange={updateEmail}
          isInvalid={!isEmailValid}
        />
        <AuthInput
          name='Password'
          type='password'
          value={password}
          onChange={updatePassword}
          isInvalid={!isPasswordValid}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default LoginView;
