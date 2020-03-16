import React, { useContext } from 'react';
import './InputView.scss';

import InputContext from '../../context/InputContext';
import PunchCardInput from './InputComponents/PunchCardInput';
import DailyChallengeInput from './InputComponents/DailyChallengeInput';
import StandardInput from './InputComponents/StandardInput';

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
        onChange={setVbucks}
      />
      <StandardInput
        name='Dailies'
        value={dailies}
        formType='text'
        onChange={setDailies}
      />
      <StandardInput
        name='Missions'
        value={missions}
        formType='text'
        onChange={setMissions}
      />
      <StandardInput
        name='Login Day'
        value={loginDay}
        formType='text'
        onChange={setLoginDay}
      />
      <StandardInput
        name='Sync Date'
        value={syncDate}
        formType='date'
        onChange={setSyncDate}
      />
      <StandardInput
        name='Level'
        value={level}
        formType='text'
        onChange={setLevel}
      />
      <StandardInput
        name='Experience'
        value={experience}
        formType='text'
        onChange={setExperience}
      />
      <StandardInput
        name='Extra XP'
        value={extraXP}
        formType='text'
        onChange={setExtraXP}
      />
      <StandardInput
        name='Unaccounted XP'
        value={unaccountedXP}
        formType='text'
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
