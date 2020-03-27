import React from 'react';
import InfoButton from './InfoButton';

function LabelHeader({ label, infoBox }) {
  return (
    <div className='label_header'>
      <h4>{label}</h4>
      {infoBox && <InfoButton message={infoBox} />}
    </div>
  );
}

export default LabelHeader;
