import React, { useState, useEffect } from 'react';
import SeasonProgressBar from './SeasonProgressBar';

import { useSelector } from 'react-redux';

const EOFCountdown = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [dateString, setDateString] = useState('');
  const data = useSelector(state => state.data);

  useEffect(() => {
    if (!data.isLoading) {
      const { endOfSeason } = data;
      // Servers usually go live at 5am
      endOfSeason.setUTCHours(5, 0, 0);
      const dateDiff = endOfSeason - new Date().setUTCHours(0, 0, 0);

      setRemainingDays(Math.round(dateDiff / 8.64e7));

      const dateFormat = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      };

      const newDateString = endOfSeason.toLocaleString('en-US', dateFormat);
      setDateString(newDateString);
    }
  }, [data, data.isLoading]);

  return (
    <div className='countdown'>
      <div className='end_of_season_date'>{dateString}</div>
      <div className='days_remaining'>{remainingDays}</div>
      <div className='left_label'>days left</div>
      <SeasonProgressBar />
    </div>
  );
};

export default EOFCountdown;
