import React from 'react';
import LabelHeader from './LabelHeader';

function StandardInput({ name, value, formType, infoBox, onChange }) {
  const sanitizedName = name.toLowerCase().replace(' ', '_');

  const updateState = e => {
    onChange(e.target.value);
  };

  return (
    <div className={`input_container ${sanitizedName}_section`}>
      <LabelHeader label={name} infoBox={infoBox} />
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
