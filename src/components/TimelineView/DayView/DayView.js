import React from 'react';

import UpdatableLabel from '../../Utility/UpdatableLabel';
import BattlePassView from './BattlePassView';
import './DayView.scss';

function DayView({ day }) {
  const thursdayClass = day.date.split(',')[0] === 'Thu' ? 'thursday' : '';

  return (
    <div className={`timeline_row day_view ${thursdayClass}`}>
      <div className='date'>{day.date}</div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_vbucks'>
          {day.vbucks}
        </UpdatableLabel>
      </div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_level'>{day.level}</UpdatableLabel>
      </div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_change'>
          {day.change}
        </UpdatableLabel>
      </div>
      {day.bpItems.length !== 0 && <BattlePassView items={day.bpItems} />}
      <div className='divider'></div>
    </div>
  );
}

export default DayView;
