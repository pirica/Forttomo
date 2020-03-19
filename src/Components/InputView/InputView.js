import React, { useContext } from 'react';
import './InputView.scss';

import InputContext from '../../context/InputContext';
import PunchCardInput from './InputComponents/PunchCardInput';
import DailyChallengeInput from './InputComponents/DailyChallengeInput';
import StandardInput from './InputComponents/StandardInput/StandardInput';

function InputView() {
  const {
    vbucks,
    dailies,
    missions,
    level,
    experience,
    extraXP,
    unaccountedXP,
    loginDay,
    syncDate,
    setVbucks,
    setDailies,
    setMissions,
    setLevel,
    setExperience,
    setExtraXP,
    setUnaccountedXP,
    setLoginDay,
    setSyncDate
  } = useContext(InputContext);

  return (
    <div className='input_view card'>
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
      <StandardInput
        name='Level'
        value={level}
        formType='text'
        message='Current Battle Royale level.'
        onChange={setLevel}
      />
      <StandardInput
        name='Experience'
        value={experience}
        formType='text'
        message='Current amount of XP gained towards next level.'
        onChange={setExperience}
      />
      <StandardInput
        name='Extra XP'
        value={extraXP}
        formType='text'
        message='Average amount of xp you plan on gaining daily outside punch card, daily, and weekly challenges.'
        onChange={setExtraXP}
      />
      <StandardInput
        name='Unaccounted XP'
        value={unaccountedXP}
        formType='text'
        message='XP currently able to obtained. ie, uncompleted challenges, punch card, etc.'
        onChange={setUnaccountedXP}
      />
      <div className='input_container day_select_section'>
        <PunchCardInput />
      </div>
      <div className='input_container day_select_section'>
        <DailyChallengeInput />
      </div>
    </div>
  );
}

export default InputView;
