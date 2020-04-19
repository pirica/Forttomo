import React from 'react';

import InputView from './InputView/InputView';
import WishlistView from './WishlistView/WishlistView';

const ControlPanel = () => {
  return (
    <div className='control_panel section'>
      <InputView />
      <WishlistView />
    </div>
  );
};

export default ControlPanel;
