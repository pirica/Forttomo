import React, { useState, useEffect } from 'react';

import { useSelector } from 'react-redux';

const SeasonProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const barWidth = { width: `${percentage}%` };
  const data = useSelector(state => state.data);

  useEffect(() => {
    if (!data.isLoading) {
      const { startOfSeason, endOfSeason } = data;
      const currentDate = new Date();
      const seasonDuration = endOfSeason - startOfSeason;
      const seasonProgress = currentDate - startOfSeason;
      const seasonLeft = (seasonDuration - seasonProgress) / seasonDuration;
      let newPercentage = Math.round((1 - seasonLeft) * 100);

      if (endOfSeason < currentDate) {
        newPercentage = 100;
      } else if (startOfSeason > currentDate) {
        newPercentage = 0;
      }

      setPercentage(newPercentage);
    }
  }, [data, data.isLoading]);

  return (
    <div className='progress_bar'>
      <div className='completed_bar' style={barWidth}></div>
      <div className='progress_text'>{`${percentage}% Completed`}</div>
    </div>
  );
};

export default SeasonProgressBar;
