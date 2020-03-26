import React from 'react';
import { endOfSeasonDate } from './../../data/General';

function EOFCountdown() {
  const EOFDate = new Date(endOfSeasonDate);
  EOFDate.setUTCHours(0, 0, 0);
  const dateDiff = EOFDate - new Date().setUTCHours(0, 0, 0);
  const remainingDays = Math.round(dateDiff / 8.64e7);
  const dateFormat = {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  };
  return (
    <div className='countdown'>
      <div className='end_of_season_date'>
        {EOFDate.toLocaleString('en-US', dateFormat)}
      </div>
      <div className='days_remaining'>{remainingDays}</div>
      <div className='left_label'>days left</div>
    </div>
  );
}

export default EOFCountdown;