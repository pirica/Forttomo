import React, { useState, useEffect, useRef } from 'react';

const DelayedInput = ({ type, value, onChange, className, delay }, ref) => {
  const [internalValue, setInternalValue] = useState(value);
  const typingTimeout = useRef();
  delay = delay || 500;

  const handleChange = e => {
    const targetValue = e.target.value;

    if (typingTimeout.current) clearTimeout(typingTimeout.current);

    typingTimeout.current = setTimeout(() => {
      onChange(targetValue);
    }, delay);

    setInternalValue(targetValue);
  };

  // When the value changes externally, the state needs to update
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <input
      className={className}
      ref={ref}
      type={type}
      value={internalValue}
      onChange={handleChange}
    />
  );
};

export default React.forwardRef(DelayedInput);
