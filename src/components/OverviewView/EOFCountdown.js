import React, { useState, useEffect, useContext } from 'react';
import SeasonProgressBar from './SeasonProgressBar';

import DataContext from '../../context/DataContext';

const EOFCountdown = () => {
  const [remainingDays, setRemainingDays] = useState(0);
  const [dateString, setDateString] = useState('');
  const { generalData, loadingGeneral } = useContext(DataContext);

  useEffect(() => {
    if (!loadingGeneral) {
      const { endOfSeason } = generalData;
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
  }, [generalData, loadingGeneral]);

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
