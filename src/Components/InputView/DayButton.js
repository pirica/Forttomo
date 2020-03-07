import React, { useState } from 'react';

function DayButton({ isOn, children, position, onChange }) {
  const [state, setState] = useState(isOn);
  const stateClass = state ? 'day_on' : 'day_off';

  const stateChange = () => {
    setState(!state);
    onChange(position, !state);
  };

  return (
    <button className={`day_button ${stateClass}`} onClick={stateChange}>
      {children}
    </button>
  );
}

export default DayButton;
