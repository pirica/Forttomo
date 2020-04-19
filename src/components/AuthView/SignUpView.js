import React from 'react';

const SignUpView = ({ toggleForm }) => {
  return (
    <div className='signup_view'>
      <h1>Sign Up</h1>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='text' name='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' />
        <label htmlFor='secretkey'>Secret Key</label>
        <input type='text' />
        <button>Sign Up</button>
      </form>
      <div className='form_toggle'>
        <div onClick={() => toggleForm()}>Returning user?</div>
      </div>
    </div>
  );
};

export default SignUpView;
