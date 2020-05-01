import React, { useState, useEffect, useContext } from 'react';

import DataContext from '../../context/DataContext';

const SeasonProgressBar = () => {
  const [percentage, setPercentage] = useState(0);
  const { generalData, loadingGeneral } = useContext(DataContext);
  const barWidth = { width: `${percentage}%` };

  useEffect(() => {
    if (!loadingGeneral) {
      const { startOfSeason, endOfSeason } = generalData;
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
  }, [generalData, loadingGeneral]);

  return (
    <div className='progress_bar'>
      <div className='completed_bar' style={barWidth}></div>
      <div className='progress_text'>{`${percentage}% Completed`}</div>
    </div>
  );
};

export default SeasonProgressBar;
