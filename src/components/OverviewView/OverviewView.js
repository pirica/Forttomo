import React from 'react';

import OverviewDetails from './OverviewDetails';
import EOFCountdown from './EOFCountdown';
import './OverviewView.scss';

function OverviewView() {
  return (
    <div className='overview'>
      <OverviewDetails />
      <EOFCountdown />
    </div>
  );
}

export default OverviewView;
