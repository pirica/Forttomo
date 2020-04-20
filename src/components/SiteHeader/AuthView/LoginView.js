import React, { useState } from 'react';

import Firebase from 'firebase/app';
import 'firebase/auth';
import AuthInput from './AuthInput';

const LoginView = ({ onSuccess }) => {
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

  const setState = (name, value) => {
    switch (name) {
      case 'Email':
        setEmail(value);
        setIsEmailValid(true);
        break;
      case 'Password':
        setPassword(value);
        setIsPasswordValid(true);
        break;
      default:
    }
  };

  return (
    <div className='login_view'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <AuthInput
          name='Email'
          inputType='text'
          value={email}
          onChange={setState}
          isValid={isEmailValid}
        />
        <AuthInput
          name='Password'
          inputType='password'
          value={password}
          onChange={setState}
          isValid={isPasswordValid}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginView;
