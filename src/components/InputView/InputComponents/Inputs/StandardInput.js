import React from 'react';
import InfoButton from './InfoButton';

function StandardInput({ name, value, formType, message, onChange }) {
  const sanitizedName = name.toLowerCase().replace(' ', '_');

  if (formType === 'date') {
    value = value.toISOString().split('T')[0];
  }

  const updateState = e => {
    if (formType === 'text') {
      onChange(parseInt(e.target.value) | 0);
    } else if (formType === 'date') {
      onChange(new Date(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`input_container ${sanitizedName}_section`}>
      <div className='label_header'>
        <h4>{name}</h4>
        {message && <InfoButton message={message} />}
      </div>
      <input
        id={`${sanitizedName}_input`}
        type={formType}
        value={value}
        onChange={updateState}
      ></input>
    </div>
  );
}

export default StandardInput;
