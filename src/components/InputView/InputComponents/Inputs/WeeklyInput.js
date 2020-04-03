import React, { useState, useEffect } from 'react';
import DayButton from './DayButton';
import LabelHeader from './LabelHeader';

import './WeeklyInput.scss';

function WeeklyInput({ label, infoBox, states, setStates }) {
  const [allDaysOn, setAllDaysOn] = useState(false);
  const selectButtonStyle = allDaysOn ? 'turned_on' : 'turned_off';

  useEffect(() => {
    let allOn = true;
    for (const state of states) {
      if (!state) allOn = false;
    }

    setAllDaysOn(allOn);
  }, [states]);

  const updateStates = (position, newState) => {
    let newStates = states.map((state, index) => {
      return position === index ? newState : state;
    });

    setStates(newStates);
  };

  const toggleAll = () => {
    const newStates = allDaysOn
      ? new Array(7).fill(false)
      : new Array(7).fill(true);

    setStates(newStates);
  };

  return (
    <div className='input_container day_select_section'>
      <LabelHeader label={label} infoBox={infoBox} />
      <div className='day_select_wrapper'>
        <DayButton isOn={states[0]} position={0} onChange={updateStates}>
          S
        </DayButton>
        <DayButton isOn={states[1]} position={1} onChange={updateStates}>
          M
        </DayButton>
        <DayButton isOn={states[2]} position={2} onChange={updateStates}>
          T
        </DayButton>
        <DayButton isOn={states[3]} position={3} onChange={updateStates}>
          W
        </DayButton>
        <DayButton isOn={states[4]} position={4} onChange={updateStates}>
          T
        </DayButton>
        <DayButton isOn={states[5]} position={5} onChange={updateStates}>
          F
        </DayButton>
        <DayButton isOn={states[6]} position={6} onChange={updateStates}>
          S
        </DayButton>
        <div className='select_button_wrapper'>
          <div
            className={`select_button ${selectButtonStyle}`}
            onClick={toggleAll}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default WeeklyInput;
