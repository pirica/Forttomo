import React from 'react';

import OverviewView from './OverviewView/OverviewView';
import TimelineView from './TimelineView/TimelineView';

const DataView = () => {
  return (
    <div className='right_panel section'>
      <OverviewView />
      <TimelineView />
    </div>
  );
};

export default DataView;
