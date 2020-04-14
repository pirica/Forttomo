import React, { useEffect } from 'react';
import LabelHeader from './LabelHeader';

function StandardInput({ name, value, formType, infoBox, onChange }) {
  const sanitizedName = name.toLowerCase().replace(' ', '_');
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.addEventListener('keypress', e => {
      if (e.which < 48 || e.which > 57) e.preventDefault();
    });
  }, [inputRef]);

  const updateState = e => {
    onChange(e.target.value);
  };

  return (
    <div className={`input_container ${sanitizedName}_section`}>
      <LabelHeader label={name} infoBox={infoBox} />
      <input
        id={`${sanitizedName}_input`}
        ref={inputRef}
        type={formType}
        value={value}
        onChange={updateState}
      ></input>
    </div>
  );
}

export default StandardInput;
