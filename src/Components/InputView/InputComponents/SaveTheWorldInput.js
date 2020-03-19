import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './StandardInput/StandardInput';

function SaveTheWorldInput() {
  const {
    vbucks,
    dailies,
    missions,
    loginDay,
    syncDate,
    setVbucks,
    setDailies,
    setMissions,
    setLoginDay,
    setSyncDate
  } = useContext(InputContext);
  return (
    <div className='stw_section mode_section'>
      <h3 className='mode_title'>Save the World</h3>
      <StandardInput
        name='Vbucks'
        value={vbucks}
        formType='text'
        message='Current amount of vbucks owned.'
        onChange={setVbucks}
      />
      <StandardInput
        name='Dailies'
        value={dailies}
        formType='text'
        message='Amount of vbucks currently obtainable from daily missions.'
        onChange={setDailies}
      />
      <StandardInput
        name='Mission Alerts'
        value={missions}
        formType='text'
        message='Amount of vbucks currently obtainable from storm alerts.'
        onChange={setMissions}
      />
      <StandardInput
        name='Login Day'
        value={loginDay}
        formType='text'
        message='Login day for login rewards. Found under the the reward you received.'
        onChange={setLoginDay}
      />
      <StandardInput
        name='Sync Date'
        value={syncDate}
        formType='date'
        message='The date you entered the Login Day textfield. Important for calculating your daily login vbucks.'
        onChange={setSyncDate}
      />
    </div>
  );
}

export default SaveTheWorldInput;
