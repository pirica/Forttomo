import React, { useContext } from 'react';

import InputContext from '../../../context/InputContext';
import StandardInput from './Inputs/StandardInput';
import WeeklyInput from './Inputs/WeeklyInput';

function BattleRoyaleInput() {
  const { input, setInput } = useContext(InputContext);

  const updateState = (valueName, value) => {
    const sanitizedValue = Number.isInteger(parseInt(value)) ? +value : '';
    const newInput = { ...input };
    newInput[valueName] = sanitizedValue;

    setInput(newInput);
  };

  return (
    <div className='br_section mode_section'>
      <h3 className='mode_title'>Battle Royale</h3>
      <StandardInput
        name='Level'
        value={input.level}
        formType='text'
        onChange={value => updateState('level', value)}
      />
      <StandardInput
        name='Experience'
        value={input.experience}
        formType='text'
        onChange={value => updateState('experience', value)}
      />
      <StandardInput
        name='Extra XP'
        value={input.playtimeXP}
        formType='text'
        infoBox='Average amount of xp you plan on gaining daily outside punch card, daily, and weekly challenges.'
        onChange={value => updateState('playtimeXP', value)}
      />
      <StandardInput
        name='Unfinished XP'
        value={input.unfinishedXP}
        formType='text'
        infoBox='XP currently able to obtained. ie, uncompleted challenges, punch card, etc.'
        onChange={value => updateState('unfinishedXP', value)}
      />
      <WeeklyInput
        label='Punch Card Days'
        infoBox='Days you plan on completing your daily medal punch card.'
        states={input.punchCardStates}
        setStates={value => setInput({ ...input, punchCardStates: value })}
      />
      <WeeklyInput
        label='Daily Challenge Days'
        infoBox={`Days you plan on doing your daily challenges. Since
          daily challenges don't need to be completed on the day of, you
          can use it to count how many dailies you plan to do a week in total.`}
        states={input.dailyBRStates}
        setStates={value => setInput({ ...input, dailyBRStates: value })}
      />
    </div>
  );
}

export default BattleRoyaleInput;
