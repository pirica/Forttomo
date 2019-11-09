import React from 'react';
import LogView from './LogView';

function DayView({ day }) {
    return (
        <div className='day_view'>
            <div className='date'>{day.date}</div>
            <div className='timeline_vbucks'>{day.vbucks}</div>
            <div className='timeline_level'>Level {day.level}</div>
            <LogView logs={day.logs} />
        </div>
    );
}

export default DayView;
