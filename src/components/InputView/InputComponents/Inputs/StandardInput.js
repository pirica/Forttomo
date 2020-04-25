import React, { useState, useEffect } from 'react';
import LabelHeader from './LabelHeader';

function StandardInput({ name, value, formType, infoBox, onChange }) {
  const [tempValue, setTempValue] = useState(value);
  const typingTimeout = React.useRef(0);

  const sanitizedName = name.toLowerCase().replace(' ', '_');
  const inputRef = React.createRef();

  useEffect(() => {
    inputRef.current.addEventListener('keypress', e => {
      if (e.which < 48 || e.which > 57) e.preventDefault();
    });
  }, [inputRef]);

  useEffect(() => {
    setTempValue(value);
  }, [value]);

  const handleChange = e => {
    const { value } = e.target;

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    // Ensures the web app doesn't rerender per keypress
    typingTimeout.current = setTimeout(() => {
      onChange(value);
    }, 500);

    setTempValue(value);
  };

  return (
    <div className={`input_container ${sanitizedName}_section`}>
      <LabelHeader label={name} infoBox={infoBox} />
      <input
        id={`${sanitizedName}_input`}
        ref={inputRef}
        type={formType}
        value={tempValue}
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default StandardInput;
