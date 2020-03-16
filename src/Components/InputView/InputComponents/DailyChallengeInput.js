import React, { useContext } from 'react';
import DayButton from './DayButton';

import InputContext from '../../../context/InputContext';

function PunchCardInput() {
  const { dailyChallengeStates, setDailyChallengeStates } = useContext(
    InputContext
  );

  const updateStates = (position, newState) => {
    const newStates = dailyChallengeStates.map((state, index) => {
      return position === index ? newState : state;
    });

    setDailyChallengeStates(newStates);
  };

  return (
    <div>
      <h3>Daily Challenge Days</h3>
      <div className='day_select_wrapper'>
        <DayButton
          isOn={dailyChallengeStates[0]}
          position={0}
          onChange={updateStates}
        >
          S
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[1]}
          position={1}
          onChange={updateStates}
        >
          M
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[2]}
          position={2}
          onChange={updateStates}
        >
          T
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[3]}
          position={3}
          onChange={updateStates}
        >
          W
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[4]}
          position={4}
          onChange={updateStates}
        >
          T
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[5]}
          position={5}
          onChange={updateStates}
        >
          F
        </DayButton>
        <DayButton
          isOn={dailyChallengeStates[6]}
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
