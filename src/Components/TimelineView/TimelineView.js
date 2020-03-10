import React, { useState, useEffect, useContext } from 'react';
import './TimelineView.scss';

import DayView from './DayView';
import Timeline from '../../model/Timeline';
import { endOfSeasonDate } from './../../data/General';
import InputContext from '../../context/InputContext';
import WishlistContext from './../../context/WishlistContext';

function TimelineView() {
  const {
    vbucks,
    dailies,
    missions,
    level,
    experience,
    loginDay,
    syncDate,
    punchCardStates,
    dailyChallengeStates
  } = useContext(InputContext);
  const { wishlistTotal, setCompletionDate } = useContext(WishlistContext);
  const totalVbucks = vbucks + dailies + missions;
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const day = 1000 * 60 * 60 * 24;
    const amountOfDays = Math.ceil(
      (new Date(endOfSeasonDate) - new Date()) / day
    );

    const newTimeline = Timeline(
      totalVbucks,
      level,
      experience,
      punchCardStates,
      dailyChallengeStates,
      loginDay,
      syncDate,
      amountOfDays
    );

    let completionDate = `NA`;

    for (const day of newTimeline) {
      if (day.vbucks >= wishlistTotal) {
        completionDate = day.date;
        break;
      }
    }

    setTimeline(newTimeline);
    setCompletionDate(completionDate);
  }, [
    totalVbucks,
    level,
    experience,
    punchCardStates,
    dailyChallengeStates,
    loginDay,
    syncDate,
    wishlistTotal,
    setCompletionDate
  ]);

  return (
    <div className='timeline_view section'>
      <h1>Timeline</h1>
      <div className='day_view'>
        <div>Date</div>
        <div>Vbucks</div>
        <div>Level</div>
        <div>Changes</div>
      </div>
      {timeline.map((day, index) => {
        return <DayView day={day} key={`day-${index}`} />;
      })}
    </div>
  );
}

export default TimelineView;
