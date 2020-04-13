import React, { useState, useEffect, useContext } from 'react';
import './TimelineView.scss';

import DayView from './DayView/DayView';
import Timeline from '../../model/Timeline';

import InputContext from '../../context/InputContext';
import OverviewContext from './../../context/OverviewContext';
import DataContext from './../../context/DataContext';

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
    dailyAlertsStates,
    loginDayStates,
  } = useContext(InputContext);

  const {
    setCurrentVbucks,
    wishlistTotal,
    setWishlistCompletionDate,
    setPassCompletionDate,
    setVbucksAtEndOfSeason,
    setLevelAtEndOfSeason,
  } = useContext(OverviewContext);

  const { generalData, battlePass, loadingGeneral, loadingPass } = useContext(
    DataContext
  );

  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const calculateTimeline = () => {
      const day = 1000 * 60 * 60 * 24;
      const amountOfDays = Math.ceil(
        (generalData.endOfSeason - new Date()) / day
      );

      const timelineData = {
        vbucks: vbucks + dailies + alerts,
        averageAlerts: +averageAlerts,
        level,
        experience,
        extraXP,
        unfinishedXP,
        punchCardStates,
        dailyBRStates,
        dailySTWStates,
        dailyAlertsStates,
        loginDayStates,
        loginDay,
        amountOfDays,
        battlePass,
      };

      const newTimeline = Timeline(timelineData);

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
    };

    if (!loadingGeneral && !loadingPass) calculateTimeline();
  }, [
    averageAlerts,
    level,
    experience,
    extraXP,
    unfinishedXP,
    punchCardStates,
    dailyBRStates,
    dailySTWStates,
    dailyAlertsStates,
    loginDayStates,
    loginDay,
    setCurrentVbucks,
    wishlistTotal,
    setWishlistCompletionDate,
    setPassCompletionDate,
    setVbucksAtEndOfSeason,
    setLevelAtEndOfSeason,
    loadingGeneral,
    loadingPass,
    battlePass,
    dailies,
    generalData.endOfSeason,
    vbucks,
    alerts,
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
