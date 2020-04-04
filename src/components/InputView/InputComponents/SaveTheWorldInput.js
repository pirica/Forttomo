import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './Inputs/StandardInput';
import WeeklyInput from './Inputs/WeeklyInput';

function SaveTheWorldInput() {
  const {
    vbucks,
    setVbucks,
    dailies,
    setDailies,
    alerts,
    setAlerts,
    averageAlerts,
    setAverageAlerts,
    loginDay,
    setLoginDay,
    dailySTWStates,
    setDailySTWStates,
    dailyAlertsStates,
    setDailyAlertsStates,
    loginDayStates,
    setLoginDayStates
  } = useContext(InputContext);

  if (averageAlerts === null) setAverageAlerts(50);

  const setState = (number, setFunc) => {
    number = parseInt(number);
    const isNumber = Number.isInteger(number);

    setFunc(isNumber ? number : '');
  };

  return (
    <div className='stw_section mode_section'>
      <StandardInput
        name='Vbucks'
        value={vbucks}
        formType='text'
        onChange={value => setState(value, setVbucks)}
      />
      <h3 className='mode_title'>Save the World</h3>
      <StandardInput
        name='Dailies'
        value={dailies}
        formType='text'
        infoBox='Amount of vbucks currently obtainable from daily challenges.'
        onChange={value => setState(value, setDailies)}
      />
      <StandardInput
        name='Mission Alerts'
        value={alerts}
        formType='text'
        infoBox='Amount of vbucks currently obtainable from storm alerts.'
        onChange={value => setState(value, setAlerts)}
      />
      <StandardInput
        name='Login Day'
        value={loginDay}
        formType='text'
        onChange={value => setState(value, setLoginDay)}
      />
      <StandardInput
        name='Average Alerts'
        value={averageAlerts}
        formType='text'
        infoBox={`Average vbucks you expect to get from mission alerts daily. 
        Usually 50 during Alert season and 30 in Storm season assuming you have access
        to all available missions.`}
        onChange={setAverageAlerts}
      />
      <WeeklyInput
        label='Daily Challenge Days'
        infoBox={`Days of the week you plan on doing your daily challenges. 
        Since daily challenges don't need to be completed on the day of, you can use 
        it to count how many dailies you plan to do a week in total.`}
        states={dailySTWStates}
        setStates={setDailySTWStates}
      />
      <WeeklyInput
        label='Mission Alert Days'
        infoBox={'Days of the week you plan on doing available mission alerts.'}
        states={dailyAlertsStates}
        setStates={setDailyAlertsStates}
      />
      <WeeklyInput
        label='Login Days'
        infoBox='Days of the week you plan to redeem login rewards.'
        states={loginDayStates}
        setStates={setLoginDayStates}
      />
    </div>
  );
}

export default SaveTheWorldInput;
