import React, { useContext } from 'react';
import PunchCardButton from './PunchCardButton';

import InputContext from '../../context/InputContext';

function PunchCardInput() {
  const { punchCardStates, setPunchCardStates } = useContext(InputContext);

  const updateStates = (position, newState) => {
    const newStates = punchCardStates.map((state, index) => {
      return position === index ? newState : state;
    });

    setPunchCardStates(newStates);
  };

  return (
    <div className='punch_card_input'>
      <PunchCardButton
        isOn={punchCardStates[0]}
        position={0}
        onChange={updateStates}
      >
        S
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[1]}
        position={1}
        onChange={updateStates}
      >
        M
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[2]}
        position={2}
        onChange={updateStates}
      >
        T
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[3]}
        position={3}
        onChange={updateStates}
      >
        W
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[4]}
        position={4}
        onChange={updateStates}
      >
        T
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[5]}
        position={5}
        onChange={updateStates}
      >
        F
      </PunchCardButton>
      <PunchCardButton
        isOn={punchCardStates[6]}
        position={6}
        onChange={updateStates}
      >
        S
      </PunchCardButton>
    </div>
  );
}

export default PunchCardInput;
