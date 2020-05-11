import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import DelayedInput from '../Utility/DelayedInput';

function WishlistInput({ value, onChange }) {
  const ref = useRef();

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

WishlistInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WishlistInput;
