import React from 'react';
import LogView from './LogView';

import uuidv4 from 'uuidv4';

import './DayView.scss';

function DayView({ day }) {
  const thursdayClass = day.date.split(',')[0] === 'Thursday' ? 'thursday' : '';
  const bpItems = day.bpItems.filter(x => x.type !== 'currency');

  return (
    <div className={`timeline_row day_view ${thursdayClass}`}>
      <div className='date'>{day.date}</div>
      <div className='timeline_vbucks'>{day.vbucks}</div>
      <div className='timeline_level'>{day.level}</div>
      <LogView logs={day.logs} />
      {bpItems.length !== 0 && (
        <div className='battlepass_unlocks'>
          <h5>Unlocked Items</h5>
          <div className='item_wrapper'>
            {bpItems.map(item => {
              const key = uuidv4();
              return (
                <div className={`${item.rarity} battlepass_item`} key={key}>
                  <div className='item_name'>{item.name}</div>
                  <div className='item_type'>({item.type})</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default DayView;
