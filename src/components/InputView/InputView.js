import React from 'react';
import './InputView.scss';

import SaveTheWorldInput from './InputComponents/SaveTheWorldInput';
import BattleRoyaleInput from './InputComponents/BattleRoyaleInput';

function InputView() {
  return (
    <div className='input_view card'>
      <SaveTheWorldInput />
      <BattleRoyaleInput />
    </div>
  );
}

export default InputView;
