import React from 'react';

import './InfoButton.scss';

function InfoButton({ message }) {
  return (
    <div className='info_button_section'>
      <div className='info_button'>
        i<div className='message_box'>{message}</div>
      </div>
    </div>
  );
}

export default InfoButton;
