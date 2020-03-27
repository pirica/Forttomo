import React, { useState, useEffect } from 'react';

function DoubleClickInput({ value, onChange }) {
  const [isEditable, setIsEditable] = useState(false);
  const textfieldRef = React.createRef();

  const handleChange = e => {
    onChange(e.target.value);
  };

  useEffect(() => {
    if (isEditable) {
      textfieldRef.current.focus();
      textfieldRef.current.addEventListener('keydown', function(e) {
        if (e.which === 13) this.blur();
      });
    }
  }, [isEditable]);

  return (
    <>
      {isEditable ? (
        <input
          type='text'
          ref={textfieldRef}
          className='wishlist_input'
          defaultValue={value}
          onChange={handleChange}
          onBlur={() => setIsEditable(false)}
        ></input>
      ) : (
        <div
          className='wishlist_input '
          onDoubleClick={() => setIsEditable(true)}
        >
          {value}
        </div>
      )}
    </>
  );
}

export default DoubleClickInput;
