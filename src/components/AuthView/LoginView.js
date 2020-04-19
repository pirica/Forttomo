import React from 'react';

const LoginView = ({ toggleForm }) => {
  return (
    <div className='login_view'>
      <h1>Login</h1>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='text' />
        <label htmlFor='password'>Password</label>
        <input type='password' />
        <button>Login</button>
      </form>
      <div className='form_toggle'>
        <div onClick={() => toggleForm()}>New user?</div>
      </div>
    </div>
  );
};

export default LoginView;
