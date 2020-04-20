import React from 'react';

const AuthInput = ({ name, inputType, value, onChange, isValid }) => {
  let classNames = 'auth_input';
  classNames += isValid ? '' : ' invalid_input';

  return (
    <>
      <label>{name}</label>
      <input
        className={classNames}
        type={inputType}
        value={value}
        onChange={e => onChange(name, e.target.value)}
      />
    </>
  );
};

export default AuthInput;
