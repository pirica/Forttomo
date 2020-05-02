import React, { useState } from 'react';

import AuthInput from './AuthInput';

import Firebase from '../../../firebase';
import 'firebase/database';
import 'firebase/functions';
import 'firebase/auth';

const SignUpView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isSecretKeyValid, setIsSecretKeyValid] = useState(true);

  const submitForm = async e => {
    e.preventDefault();

    const secretKeyCompare = Firebase.functions().httpsCallable('secretKey');
    const response = await secretKeyCompare({ key: secretKey });
    const isCorrectKey = response.data.isCorrect;

    let formFailed = false;

    if (!isCorrectKey) {
      setIsSecretKeyValid(false);
      formFailed = true;
    }

    if (password.length < 8) {
      setIsPasswordValid(false);
      formFailed = true;
    }

    if (formFailed) return;

    const auth = Firebase.auth();

    const result = await auth.createUserWithEmailAndPassword(email, password);
    result.user.updateProfile({
      displayName: displayName,
    });
  };

  const updateEmail = value => {
    setEmail(value);
    setIsEmailValid(true);
  };

  const updatePassword = value => {
    setPassword(value);
    setIsPasswordValid(value);
  };

  const updateDisplayName = value => {
    setDisplayName(value);
  };

  const updateSecretKey = value => {
    setSecretKey(value);
    setIsSecretKeyValid(true);
  };

  return (
    <div className='signup_view'>
      <h1>Sign Up</h1>
      <form onSubmit={submitForm}>
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
        <AuthInput
          name='Display Name'
          type='text'
          value={displayName}
          onChange={updateDisplayName}
        />
        <AuthInput
          name='Secret Key'
          type='text'
          value={secretKey}
          onChange={updateSecretKey}
          isInvalid={!isSecretKeyValid}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;
