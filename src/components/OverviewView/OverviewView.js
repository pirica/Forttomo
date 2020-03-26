import React from 'react';

import OverviewDetails from './OverviewDetails';
import './OverviewView.scss';

function OverviewView() {
  return (
    <div className='overview'>
      <OverviewDetails />
      <div>END OF SEASON</div>
    </div>
  );
}

export default OverviewView;
