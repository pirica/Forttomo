import React, { useContext } from 'react';
import DayButton from './DayButton';

import InputContext from '../../../context/InputContext';

function PunchCardInput() {
  const { punchCardStates, setPunchCardStates } = useContext(InputContext);

  const updateStates = (position, newState) => {
    const newStates = punchCardStates.map((state, index) => {
      return position === index ? newState : state;
    });

    setPunchCardStates(newStates);
  };

  return (
    <div>
      <h3>Punch Card Days</h3>
      <div className='day_select_wrapper'>
        <DayButton
          isOn={punchCardStates[0]}
          position={0}
          onChange={updateStates}
        >
          S
        </DayButton>
        <DayButton
          isOn={punchCardStates[1]}
          position={1}
          onChange={updateStates}
        >
          M
        </DayButton>
        <DayButton
          isOn={punchCardStates[2]}
          position={2}
          onChange={updateStates}
        >
          T
        </DayButton>
        <DayButton
          isOn={punchCardStates[3]}
          position={3}
          onChange={updateStates}
        >
          W
        </DayButton>
        <DayButton
          isOn={punchCardStates[4]}
          position={4}
          onChange={updateStates}
        >
          T
        </DayButton>
        <DayButton
          isOn={punchCardStates[5]}
          position={5}
          onChange={updateStates}
        >
          F
        </DayButton>
        <DayButton
          isOn={punchCardStates[6]}
          position={6}
          onChange={updateStates}
        >
          S
        </DayButton>
      </div>
    </div>
  );
}

export default PunchCardInput;
