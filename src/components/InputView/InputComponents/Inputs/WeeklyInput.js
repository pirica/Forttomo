import React from 'react';
import DayButton from './DayButton';
import LabelHeader from './LabelHeader';

function WeeklyInput({ label, infoBox, states, setStates }) {
  const updateStates = (position, newState) => {
    const newStates = states.map((state, index) => {
      return position === index ? newState : state;
    });

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
      </div>
    </div>
  );
}

export default WeeklyInput;
