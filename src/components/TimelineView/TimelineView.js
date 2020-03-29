import React, { useState, useEffect, useContext } from 'react';
import './TimelineView.scss';

import DayView from './DayView/DayView';
import Timeline from '../../model/Timeline';
import { endOfSeasonDate } from './../../data/General';
import InputContext from '../../context/InputContext';
import OverviewContext from './../../context/OverviewContext';

function TimelineView() {
  const {
    vbucks,
    dailies,
    alerts,
    averageAlerts,
    level,
    experience,
    extraXP,
    unfinishedXP,
    loginDay,
    punchCardStates,
    dailyBRStates,
    dailySTWStates,
    dailyAlertsStates
  } = useContext(InputContext);
  const totalVbucks = vbucks + dailies + alerts;
  const {
    setCurrentVbucks,
    wishlistTotal,
    setWishlistCompletionDate,
    setPassCompletionDate,
    setVbucksAtEndOfSeason,
    setLevelAtEndOfSeason
  } = useContext(OverviewContext);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const day = 1000 * 60 * 60 * 24;
    const amountOfDays = Math.ceil(
      (new Date(endOfSeasonDate) - new Date()) / day
    );

    const newTimeline = Timeline(
      totalVbucks,
      +averageAlerts,
      level,
      experience,
      extraXP,
      unfinishedXP,
      punchCardStates,
      dailyBRStates,
      dailySTWStates,
      dailyAlertsStates,
      loginDay,
      amountOfDays
    );

    let wishlistDate = `NA`;
    let passDate = 'NA';

    for (const day of newTimeline) {
      if (wishlistDate === 'NA' && day.vbucks >= wishlistTotal) {
        wishlistDate = day.date;
      }
      if (passDate === 'NA' && day.level >= 100) passDate = day.date;

      if (wishlistDate !== 'NA' && passDate !== 'NA') break;
    }

    let lastDay = newTimeline[newTimeline.length - 1];

    setTimeline(newTimeline);
    setCurrentVbucks(newTimeline[0].vbucks);
    setWishlistCompletionDate(wishlistDate);
    setPassCompletionDate(passDate);
    setVbucksAtEndOfSeason(lastDay.vbucks);
    setLevelAtEndOfSeason(lastDay.level);
  }, [
    totalVbucks,
    averageAlerts,
    level,
    experience,
    extraXP,
    unfinishedXP,
    punchCardStates,
    dailyBRStates,
    dailySTWStates,
    dailyAlertsStates,
    loginDay,
    setCurrentVbucks,
    wishlistTotal,
    setWishlistCompletionDate,
    setPassCompletionDate,
    setVbucksAtEndOfSeason,
    setLevelAtEndOfSeason
  ]);

  return (
    <div className='timeline_view section'>
      <div className='timeline_row label_row'>
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
