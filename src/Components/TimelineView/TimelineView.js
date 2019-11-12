import React, { useState, useEffect, useContext } from 'react';
import './TimelineView.scss';

import DayView from './DayView';
import Timeline from '../../model/Timeline';
import { endOfSeasonDate } from './../../data/General';
import InfoContext from './../../context/AccountInfo';

function TimelineView() {
    const {
        vbucks,
        dailies,
        missions,
        level,
        experience,
        loginDay,
        syncDate,
        punchCardStates
    } = useContext(InfoContext);
    const totalVbucks = vbucks + dailies + missions;
    const [timeline, setTimeline] = useState([]);

    useEffect(() => {
        const amountOfDays = Math.ceil(
            (new Date(endOfSeasonDate) - new Date()) / (1000 * 60 * 60 * 24)
        );
        const newTimeline = Timeline(
            totalVbucks,
            level,
            experience,
            punchCardStates,
            loginDay,
            syncDate,
            amountOfDays
        );
        setTimeline(newTimeline);
    }, [totalVbucks, level, experience, punchCardStates, loginDay, syncDate]);

    return (
        <div className='timeline_view section'>
            <h1>Timeline</h1>
            {timeline.map((day, index) => {
                return <DayView day={day} key={`day-${index}`} />;
            })}
        </div>
    );
}

export default TimelineView;
