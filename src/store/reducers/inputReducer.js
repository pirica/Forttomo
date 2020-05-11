import { LOAD_INPUT, UPDATE_INPUT } from '../actions/types';

import Firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const initialState = {
  vbucks: 0,
  dailies: 0,
  alerts: 0,
  averageAlerts: 0,
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
  syncDate: new Date().getTime(),
  isLoading: true,
};

const updateLoginDay = (currentLoginDay, startTimeStamp, loginDayStates) => {
  const beginDate = new Date(startTimeStamp);
  const endDate = new Date();

  beginDate.setUTCHours(0, 0, 0);
  endDate.setUTCHours(0, 0, 0);

  const msPerDay = 8.64e7;
  const days = Math.round((endDate - beginDate) / msPerDay);
  let newLogins = 0;

  // Login days are based on weekdays, and should only count the days
  // of the week the user selected.
  for (let day = 1; day <= days; day++) {
    const newDate = new Date(beginDate);
    newDate.setDate(newDate.getDate() + day);

    if (loginDayStates[newDate.getUTCDay()]) newLogins += 1;
  }

  return currentLoginDay + newLogins;
};

const saveToFirebase = (data, id) => {
  const path = 'users/' + id + '/input';

  Firebase.database().ref(path).set(data);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_INPUT:
      const { loginDay, syncDate, loginDayStates } = action.payload;
      const newLoginDay = updateLoginDay(loginDay, syncDate, loginDayStates);

      return {
        ...action.payload,
        loginDay: newLoginDay,
        syncDate: new Date().getTime(),
        isLoading: false,
      };
    case UPDATE_INPUT:
      const data = {
        ...state,
        syncDate: new Date().getTime(),
        ...action.payload,
      };
      const userID = Firebase.auth().currentUser.uid;

      if (userID) saveToFirebase(data, userID);

      return data;
    default:
      return state;
  }
};
