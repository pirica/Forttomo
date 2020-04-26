import React, { useEffect } from 'react';

import DelayedInput from '../Utility/DelayedInput';

function DoubleClickInput({ value, onChange }) {
  const ref = React.createRef();

  const handleChange = change => {
    onChange(change);
  };

  useEffect(() => {
    const textfield = ref.current;

    const enterPress = function (e) {
      if (e.which === 13) this.blur();
    };

    textfield.addEventListener('keydown', enterPress);

    return () => textfield.removeEventListener('keydown', enterPress);
  }, [ref]);

  return (
    <DelayedInput
      type='text'
      ref={ref}
      className='item_property item_input'
      value={value}
      onChange={handleChange}
    />
  );
}

export default DoubleClickInput;
