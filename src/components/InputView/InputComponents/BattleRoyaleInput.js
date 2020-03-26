import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './StandardInput/StandardInput';
import PunchCardInput from './PunchCardInput';
import DailyChallengeInput from './DailyChallengeInput';

function BattleRoyaleInput() {
  const {
    level,
    experience,
    extraXP,
    unfinishedXP,
    setLevel,
    setExperience,
    setExtraXP,
    setUnfinishedXP
  } = useContext(InputContext);

  return (
    <div className='br_section mode_section'>
      <h3 className='mode_title'>Battle Royale</h3>
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
        message='Average amount of xp you plan on gaining daily outside punch card, daily, and weekly challenges.'
        onChange={setExtraXP}
      />
      <StandardInput
        name='Unfinished XP'
        value={unfinishedXP}
        formType='text'
        message='XP currently able to obtained. ie, uncompleted challenges, punch card, etc.'
        onChange={setUnfinishedXP}
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

export default BattleRoyaleInput;
