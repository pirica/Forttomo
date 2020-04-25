import React, { useState, useEffect, useContext } from 'react';

import InputContext from '../../context/InputContext';
import AuthContext from '../../context/AuthContext';
import Firebase from '../../firebase';
import 'firebase/database';

function InputContextWrap({ children }) {
  const { userID } = useContext(AuthContext);
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
  const [input, setInput] = useState(defaultInput);

  useEffect(() => {
    if (userID) {
      const path = 'users/' + userID + '/input';
      Firebase.database()
        .ref(path)
        .once('value')
        .then(snapshot => {
          const data = snapshot.val();

          if (data !== null) {
            setInput({ ...data });
          }
        });
    }
  }, [userID]);

  useEffect(() => {
    // Date that was recorded when the last login day was registered.
    const syncDate = Date.parse(input.syncDate);

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
    const data = { ...input, syncDate: new Date().getTime() };

    if (userID) {
      const path = 'users/' + userID + '/input';

      Firebase.database().ref(path).set(data);
    }

    const inputString = JSON.stringify(data);
    localStorage.setItem('input', inputString);
  }, [input]);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
}

export default InputContextWrap;
