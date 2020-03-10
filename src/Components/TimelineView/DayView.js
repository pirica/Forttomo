import React from 'react';
import LogView from './LogView';

function DayView({ day }) {
  const thursdayClass = day.date.split(',')[0] === 'Thursday' ? 'thursday' : '';

  return (
    <div className={`timeline_row day_view ${thursdayClass}`}>
      <div className='date'>{day.date}</div>
      <div className='timeline_vbucks'>{day.vbucks}</div>
      <div className='timeline_level'>{day.level}</div>
      <LogView logs={day.logs} />
    </div>
  );
}

export default DayView;
