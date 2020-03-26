import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './StandardInput/StandardInput';

function SaveTheWorldInput() {
  const {
    vbucks,
    dailies,
    alerts,
    averageAlerts,
    loginDay,
    setVbucks,
    setDailies,
    setAlerts,
    setAverageAlerts,
    setLoginDay
  } = useContext(InputContext);

  if (averageAlerts === null) setAverageAlerts(50);

  return (
    <div className='stw_section mode_section'>
      <StandardInput
        name='Vbucks'
        value={vbucks}
        formType='text'
        onChange={setVbucks}
      />
      <h3 className='mode_title'>Save the World</h3>
      <StandardInput
        name='Dailies'
        value={dailies}
        formType='text'
        message='Amount of vbucks currently obtainable from daily challenges.'
        onChange={setDailies}
      />
      <StandardInput
        name='Mission Alerts'
        value={alerts}
        formType='text'
        message='Amount of vbucks currently obtainable from storm alerts.'
        onChange={setAlerts}
      />
      <StandardInput
        name='Login Day'
        value={loginDay}
        formType='text'
        onChange={setLoginDay}
      />
      <StandardInput
        name='Average Alerts'
        value={averageAlerts}
        formType='text'
        message='Average vbucks you expect to get from mission alerts daily. Usually 50 during Alert season and 30 in Storm season.'
        onChange={setAverageAlerts}
      />
    </div>
  );
}

export default SaveTheWorldInput;
