import React, { useState, useEffect, useCallback } from 'react';
import './TimelineView.scss';

import DayView from './DayView/DayView';
import Timeline from '../../model/Timeline';

import { useSelector, useDispatch } from 'react-redux';
import { setOverview } from '../../store/actions/overviewActions';

function TimelineView() {
  const [timeline, setTimeline] = useState([]);

  const input = useSelector(state => state.input);
  const data = useSelector(state => state.data);
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useCallback(useDispatch(), []);

  useEffect(() => {
    const calculateTimeline = () => {
      const day = 1000 * 60 * 60 * 24;
      // TODO: Fix miscounting after 8pm EST
      const amountOfDays = Math.ceil((data.endOfSeason - new Date()) / day);

      const timelineData = {
        vbucks: +input.vbucks + +input.dailies + +input.alerts,
        averageAlerts: +input.averageAlerts,
        level: +input.level,
        experience: +input.experience,
        playtimeXP: +input.playtimeXP,
        unfinishedXP: +input.unfinishedXP,
        loginDay: +input.loginDay,
        punchCardStates: input.punchCardStates,
        dailyBRStates: input.dailyBRStates,
        dailySTWStates: input.dailySTWStates,
        dailyAlertsStates: input.dailyAlertsStates,
        loginDayStates: input.loginDayStates,
        amountOfDays,
        battlePass: data.battlePass,
      };

      const newTimeline = Timeline(timelineData);

      let wishlistDate = `NA`;
      let passDate = 'NA';

      for (const day of newTimeline) {
        if (wishlistDate === 'NA' && day.vbucks >= wishlist.total) {
          wishlistDate = day.date;
        }
        if (passDate === 'NA' && day.level >= 100) passDate = day.date;

        if (wishlistDate !== 'NA' && passDate !== 'NA') break;
      }

      let lastDay = newTimeline[newTimeline.length - 1];

      setTimeline(newTimeline);
      const overviewDetails = {
        currentVbucks: newTimeline[0].vbucks,
        wishlistCompletionDate: wishlistDate,
        battlePassCompletionDate: passDate,
        vbucksAtEndOfSeason: lastDay.vbucks,
        levelAtEndOfSeason: lastDay.level,
      };

      dispatch(setOverview(overviewDetails));
    };

    if (!data.isLoading) calculateTimeline();
  }, [
    dispatch,
    input,
    wishlist.total,
    data.isLoading,
    data.battlePass,
    data.endOfSeason,
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
