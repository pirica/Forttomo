import React from 'react';

const SignUpView = ({ toggleForm }) => {
  return (
    <div className='signup_view'>
      <input type='text' placeholder='Email' />
      <input type='password' placeholder='Password' />
      <input type='text' placeholder='Secret Key' />
      <button>Sign Up</button>
      <div onClick={() => toggleForm()}>Returning user?</div>
    </div>
  );
};

export default SignUpView;
