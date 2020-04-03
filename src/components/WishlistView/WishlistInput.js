import React, { useEffect } from 'react';

function DoubleClickInput({ value, onChange }) {
  const textfieldRef = React.createRef();

  const handleChange = e => {
    onChange(e.target.value);
  };

  useEffect(() => {
    const textfield = textfieldRef.current;

    const enterPress = function(e) {
      if (e.which === 13) this.blur();
    };

    textfield.addEventListener('keydown', enterPress);

    return () => textfield.removeEventListener('keydown', enterPress);
  }, [textfieldRef]);

  return (
    <input
      type='text'
      ref={textfieldRef}
      className='item_property item_input'
      defaultValue={value}
      onChange={handleChange}
    ></input>
  );
}

export default DoubleClickInput;
