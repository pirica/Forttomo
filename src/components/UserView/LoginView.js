import React from 'react';

const LoginView = ({ toggleForm }) => {
  return (
    <div className='login_view'>
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <button>Login</button>
      <div onClick={() => toggleForm()}>New user?</div>
    </div>
  );
};

export default LoginView;
