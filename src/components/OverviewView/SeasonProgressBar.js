import React from 'react';
import { startOfSeasonDate, endOfSeasonDate } from '../../data/General.json';

function SeasonProgressBar() {
  const seasonStart = new Date(startOfSeasonDate);
  const seasonEnd = new Date(endOfSeasonDate);
  const currentDate = new Date();
  const seasonDuration = seasonEnd - seasonStart;
  const seasonProgress = currentDate - seasonStart;
  const seasonLeft = (seasonDuration - seasonProgress) / seasonDuration;
  let percentage = Math.round((1 - seasonLeft) * 100);

  if (seasonEnd < currentDate) {
    percentage = 100;
  } else if (seasonStart > currentDate) {
    percentage = 0;
  }

  const barWidth = { width: `${percentage}%` };

  return (
    <div className='progress_bar'>
      <div className='completed_bar' style={barWidth}></div>
      <div className='progress_text'>{`${percentage}% Completed`}</div>
    </div>
  );
}

export default SeasonProgressBar;
