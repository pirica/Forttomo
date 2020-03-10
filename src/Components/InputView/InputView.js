import React, { useContext } from 'react';
import './InputView.scss';

import InputContext from '../../context/InputContext';
import PunchCardInput from './PunchCardInput';
import DailyChallengeInput from './DailyChallengeInput';

function InputView() {
  const {
    vbucks,
    dailies,
    missions,
    level,
    experience,
    extraXP,
    loginDay,
    syncDate,
    setVbucks,
    setDailies,
    setMissions,
    setLevel,
    setExperience,
    setExtraXP,
    setLoginDay,
    setSyncDate
  } = useContext(InputContext);

  return (
    <div className='input_view card'>
      <div className='input_container vbucks_section'>
        <label htmlFor='vbucks_input'>Vbucks</label>
        <input
          id='vbucks_input'
          type='text'
          value={vbucks}
          onChange={e => setVbucks(parseInt(e.target.value) | 0)}
          placeholder='Vbucks'
        />
      </div>
      <div className='input_container dailies_section'>
        <label htmlFor='dailies_input'>Dailies</label>
        <input
          id='dailies_input'
          type='text'
          value={dailies}
          onChange={e => setDailies(parseInt(e.target.value) | 0)}
          placeholder='Dailies'
        />
      </div>
      <div className='input_container missions_section'>
        <label htmlFor='missions_input'>Missions</label>
        <input
          id='missions_input'
          type='text'
          value={missions}
          onChange={e => setMissions(parseInt(e.target.value) | 0)}
          placeholder='Missions'
        />
      </div>
      <div className='input_container level_section'>
        <label htmlFor='level_input'>Level</label>
        <input
          id='level_input'
          type='text'
          value={level}
          onChange={e => setLevel(parseInt(e.target.value) | 0)}
          placeholder='Battle Pass Level'
        />
      </div>
      <div className='input_container experience_section'>
        <label htmlFor='experience_input'>Experience</label>
        <input
          id='experience_input'
          type='text'
          value={experience}
          onChange={e => setExperience(parseInt(e.target.value) | 0)}
          placeholder='XP'
        />
      </div>
      <div className='input_container login_day_section'>
        <label htmlFor='login_day_input'>Login Day</label>
        <input
          id='login_day_input'
          type='text'
          value={loginDay}
          onChange={e => setLoginDay(parseInt(e.target.value) | 0)}
          placeholder='Login Day'
        />
      </div>
      <div className='input_container sync_date_section'>
        <label htmlFor='sync_date_input'>Sync Date</label>
        <input
          id='sync_date_input'
          type='date'
          value={syncDate.toISOString().split('T')[0]}
          onChange={e => {
            setSyncDate(new Date(e.target.value));
          }}
        />
      </div>
      <div className='input_container extra_xp_section'>
        <label htmlFor='sync_date_input'>Extra XP</label>
        <input
          id='extra_xp_input'
          type='text'
          value={extraXP}
          onChange={e => {
            setExtraXP(parseInt(e.target.value));
          }}
        />
      </div>
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
