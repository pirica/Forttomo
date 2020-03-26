import React, { useState } from 'react';

function InfoButton({ message }) {
  const [messageOpen, setMessageOpen] = useState(false);
  const animationClass = messageOpen ? 'messageOpen' : '';

  return (
    <div
      className='info_button_section'
      onClick={() => setMessageOpen(!messageOpen)}
    >
      <div className='info_button'>i</div>
      <div
        className={`message_box ${animationClass}`}
        onClick={() => setMessageOpen(!messageOpen)}
      >
        {message}
      </div>
    </div>
  );
}

export default InfoButton;
