import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './Inputs/StandardInput';
import WeeklyInput from './Inputs/WeeklyInput';

function BattleRoyaleInput() {
  const {
    level,
    setLevel,
    experience,
    setExperience,
    extraXP,
    setExtraXP,
    unfinishedXP,
    setUnfinishedXP,
    punchCardStates,
    setPunchCardStates,
    dailyBRStates,
    setDailyBRStates
  } = useContext(InputContext);

  const setState = (number, setFunc) => {
    number = parseInt(number);
    const isNumber = Number.isInteger(number);

    setFunc(isNumber ? number : '');
  };

  return (
    <div className='br_section mode_section'>
      <h3 className='mode_title'>Battle Royale</h3>
      <StandardInput
        name='Level'
        value={level}
        formType='text'
        onChange={value => setState(value, setLevel)}
      />
      <StandardInput
        name='Experience'
        value={experience}
        formType='text'
        onChange={value => setState(value, setExperience)}
      />
      <StandardInput
        name='Extra XP'
        value={extraXP}
        formType='text'
        infoBox='Average amount of xp you plan on gaining daily outside punch card, daily, and weekly challenges.'
        onChange={value => setState(value, setExtraXP)}
      />
      <StandardInput
        name='Unfinished XP'
        value={unfinishedXP}
        formType='text'
        infoBox='XP currently able to obtained. ie, uncompleted challenges, punch card, etc.'
        onChange={value => setState(value, setUnfinishedXP)}
      />
      <WeeklyInput
        label='Punch Card Days'
        infoBox='Days you plan on completing your daily medal punch card.'
        states={punchCardStates}
        setStates={setPunchCardStates}
      />
      <WeeklyInput
        label='Daily Challenge Days'
        infoBox={`Days you plan on doing your daily challenges. Since
          daily challenges don't need to be completed on the day of, you
          can use it to count how many dailies you plan to do a week in total.`}
        states={dailyBRStates}
        setStates={setDailyBRStates}
      />
    </div>
  );
}

export default BattleRoyaleInput;
