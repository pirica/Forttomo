import React from 'react';

import BattlePassView from './BattlePassView';
import './DayView.scss';

function DayView({ day }) {
  const thursdayClass = day.date.split(',')[0] === 'Thu' ? 'thursday' : '';

  return (
    <div className={`timeline_row day_view ${thursdayClass}`}>
      <div className='date'>{day.date}</div>
      <div className='timeline_vbucks'>{day.vbucks}</div>
      <div className='timeline_level'>{day.level}</div>
      <div className='timeline_change'>{day.change}</div>
      {day.bpItems.length !== 0 && <BattlePassView items={day.bpItems} />}
      <div className='divider'></div>
    </div>
  );
}

export default DayView;
