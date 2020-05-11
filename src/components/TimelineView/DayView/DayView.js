import React from 'react';
import PropTypes from 'prop-types';

import UpdatableLabel from '../../Utility/UpdatableLabel';
import BattlePassView from './BattlePassView';
import './DayView.scss';

const DayView = ({ day }) => {
  const { date, vbucks, level, change, bpItems } = day;
  const thursdayClass = day.date.split(',')[0] === 'Thu' ? 'thursday' : '';
  const containerClass = `timeline_row day_view ${thursdayClass}`;

  return (
    <div className={containerClass}>
      <div className='date'>{date}</div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_vbucks'>{vbucks}</UpdatableLabel>
      </div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_level'>{level}</UpdatableLabel>
      </div>
      <div className='timeline_label_wrapper'>
        <UpdatableLabel className='timeline_change'>{change}</UpdatableLabel>
      </div>
      {bpItems.length !== 0 && <BattlePassView items={bpItems} />}
      <div className='divider'></div>
    </div>
  );
};

DayView.propTypes = {
  day: PropTypes.shape({
    date: PropTypes.string,
    vbucks: PropTypes.number,
    level: PropTypes.number,
    change: PropTypes.string,
    bpItems: PropTypes.array,
  }).isRequired,
};

export default DayView;
