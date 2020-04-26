import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './Inputs/StandardInput';
import WeeklyInput from './Inputs/WeeklyInput';

function SaveTheWorldInput() {
  const { input, setInput } = useContext(InputContext);

  const updateState = (valueName, value) => {
    const sanitizedValue = Number.isInteger(parseInt(value)) ? +value : '';
    const newInput = { ...input };
    newInput[valueName] = sanitizedValue;

    setInput(newInput);
  };

  return (
    <div className='stw_section mode_section'>
      <StandardInput
        name='Vbucks'
        value={input.vbucks}
        type='text'
        onChange={value => updateState('vbucks', value)}
      />
      <h3 className='mode_title'>Save the World</h3>
      <StandardInput
        name='Dailies'
        value={input.dailies}
        type='text'
        infoBox='Amount of vbucks currently obtainable from daily challenges.'
        onChange={value => updateState('dailies', value)}
      />
      <StandardInput
        name='Mission Alerts'
        value={input.alerts}
        type='text'
        infoBox='Amount of vbucks currently obtainable from storm alerts.'
        onChange={value => updateState('alerts', value)}
      />
      <StandardInput
        name='Login Day'
        value={input.loginDay}
        type='text'
        onChange={value => updateState('loginDay', value)}
      />
      <StandardInput
        name='Average Alerts'
        value={input.averageAlerts}
        type='text'
        infoBox={`Average vbucks you expect to get from mission alerts daily. 
        Usually 50 during Alert season and 30 in Storm season assuming you have access
        to all available missions.`}
        onChange={value => updateState('averageAlerts', value)}
      />
      <WeeklyInput
        label='Daily Challenge Days'
        infoBox={`Days of the week you plan on doing your daily challenges. 
        Since daily challenges don't need to be completed on the day of, you can use 
        it to count how many dailies you plan to do a week in total.`}
        states={input.dailySTWStates}
        setStates={value => setInput({ ...input, dailySTWStates: value })}
      />
      <WeeklyInput
        label='Mission Alert Days'
        infoBox={'Days of the week you plan on doing available mission alerts.'}
        states={input.dailyAlertsStates}
        setStates={value => setInput({ ...input, dailyAlertsStates: value })}
      />
      <WeeklyInput
        label='Login Days'
        infoBox='Days of the week you plan to redeem login rewards.'
        states={input.loginDayStates}
        setStates={value => setInput({ ...input, loginDayStates: value })}
      />
    </div>
  );
}

export default SaveTheWorldInput;
