import React, { useState } from 'react';

import Firebase from '../../../firebase';
import 'firebase/functions';
import 'firebase/auth';
import AuthInput from './AuthInput';

const SignUpView = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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

    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        const { code, message } = error;

        console.log(code, message);
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
      case 'Secret Key':
        setSecretKey(value);
        setIsSecretKeyValid(true);
        break;
      default:
    }
  };

  return (
    <div className='signup_view'>
      <h1>Sign Up</h1>
      <form onSubmit={submitForm}>
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
        <AuthInput
          name='Secret Key'
          inputType='text'
          value={secretKey}
          onChange={setState}
          isValid={isSecretKeyValid}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;
