import React, { useState, useEffect } from 'react';

import InputContext from '../../context/InputContext';

function InputContextWrap({ children }) {
  const storedInput = JSON.parse(localStorage.getItem('input'));
  const defaultInput = {
    vbucks: 0,
    dailies: 0,
    alerts: 0,
    averageAlerts: 30,
    level: 1,
    experience: 0,
    playtimeXP: 0,
    unfinishedXP: 0,
    loginDay: 1,
    punchCardStates: new Array(7).fill(true),
    dailyBRStates: new Array(7).fill(true),
    dailySTWStates: new Array(7).fill(true),
    dailyAlertsStates: new Array(7).fill(true),
    loginDayStates: new Array(7).fill(true),
  };

  const state = storedInput ? storedInput : defaultInput;
  const [input, setInput] = useState(state);

  useEffect(() => {
    // Date that was recorded when the last login day was registered.
    const syncDate = Date.parse(localStorage.getItem('syncDate'));

    if (syncDate) {
      const beginDate = new Date(syncDate);
      const endDate = new Date();

      beginDate.setUTCHours(0, 0, 0);
      endDate.setUTCHours(0, 0, 0);

      const msPerDay = 8.64e7;
      const days = Math.round((endDate - beginDate) / msPerDay);
      let newLogins = 0;

      // Login days are based on weekdays, and should only be counted the days
      // of the week the user selected.
      for (let day = 1; day <= days; day++) {
        const newDate = new Date(beginDate);
        newDate.setDate(newDate.getDate() + day);

        if (input.loginDayStates[newDate.getUTCDay()]) newLogins += 1;
      }

      setInput(input => {
        return { ...input, loginDay: input.loginDay + newLogins };
      });
    }
  }, [input.loginDayStates]);

  useEffect(() => {
    const inputString = JSON.stringify(input);
    const currentTime = new Date();

    localStorage.setItem('input', inputString);
    localStorage.setItem('syncDate', currentTime);
  }, [input]);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}

export default InputContextWrap;
