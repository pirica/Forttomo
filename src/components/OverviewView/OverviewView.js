import React from 'react';

import OverviewDetails from './OverviewDetails';
import EOFCountdown from './EOFCountdown';
import './OverviewView.scss';

const OverviewView = () => {
  return (
    <div className='overview'>
      <OverviewDetails />
      <EOFCountdown />
    </div>
  );
};

export default OverviewView;
