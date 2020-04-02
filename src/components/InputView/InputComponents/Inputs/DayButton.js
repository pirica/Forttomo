import React from 'react';

function DayButton({ isOn, children, position, onChange }) {
  const stateClass = isOn ? 'day_on' : 'day_off';

  const stateChange = () => {
    onChange(position, !isOn);
  };

  return (
    <button className={`day day_button ${stateClass}`} onClick={stateChange}>
      {children}
    </button>
  );
}

export default DayButton;
