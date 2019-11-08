import React, { useState, useEffect, useContext } from 'react';
import './TimelineView.scss';

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
        loginDay
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
            loginDay,
            amountOfDays
        );
        setTimeline(newTimeline);
    }, [totalVbucks, level, experience, loginDay]);

    return (
        <div className='timeline_view section'>
            <h3>Timeline</h3>
            {timeline.map((day, index) => {
                return (
                    <div key={`Day-${index}`}>
                        {day.date.toISOString().split('T')[0]} | {day.vbucks} |
                        Level {day.level}
                        {day.logs.map(log => {
                            return ` | ${log.amount} ${log.type}`;
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default TimelineView;
