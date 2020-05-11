import React, { useEffect } from 'react';
import LabelHeader from './LabelHeader';
import DelayedInput from '../../../Utility/DelayedInput';

function StandardInput({ name, value, type, infoBox, onChange }) {
  const sanitizedName = name.toLowerCase().replace(' ', '_');
  const className = `${sanitizedName}_input`;
  const ref = React.createRef();

  useEffect(() => {
    const inputRef = ref.current;

    const preventNonNumbers = e => {
      if (e.which < 48 || e.which > 57) e.preventDefault();
    };

    if (inputRef) {
      inputRef.addEventListener('keypress', preventNonNumbers);
    }

    return () => {
      if (inputRef) {
        inputRef.removeEventListener('keypress', preventNonNumbers);
      }
    };
  }, [ref]);

  return (
    <div className={`input_container ${sanitizedName}_section`}>
      <LabelHeader label={name} infoBox={infoBox} />
      <DelayedInput
        type={type}
        className={className}
        ref={ref}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default StandardInput;
