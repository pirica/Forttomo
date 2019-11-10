import React, { useState } from 'react';

function PunchCardButton({ isOn, children, position, onChange }) {
    const [state, setState] = useState(isOn);
    const stateClass = state ? 'day_on' : 'day_off';

    const stateChange = () => {
        setState(!state);
        onChange(position, !state);
    };

    return (
        <button
            className={`punch_card_day ${stateClass}`}
            onClick={stateChange}
        >
            {children}
        </button>
    );
}

export default PunchCardButton;
