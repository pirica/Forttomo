import React, { useContext } from 'react';
import './InputView.scss';

import SaveTheWorldInput from './InputComponents/SaveTheWorldInput';
import BattleRoyaleInput from './InputComponents/BattleRoyaleInput';

function InputView() {
  return (
    <div className='card'>
      <SaveTheWorldInput />
      <BattleRoyaleInput />
    </div>
  );
}

export default InputView;
