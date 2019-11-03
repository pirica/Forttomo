import React from 'react';
import './InputView.scss';

function InputView() {
    return (
        <div className='input_view card section'>
            <input type='text' placeholder='Vbucks' />
            <input type='text' placeholder='Dallies' />
            <input type='text' placeholder='Missions' />
            <input type='text' placeholder='Battle Pass Level' />
            <input type='text' placeholder='XP' />
            <input type='text' placeholder='Login Day' />
            <input type='text' placeholder='Date' />
        </div>
    );
}

export default InputView;
