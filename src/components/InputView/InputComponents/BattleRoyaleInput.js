import React from 'react';

import StandardInput from './Inputs/StandardInput';
import WeeklyInput from './Inputs/WeeklyInput';

import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../../../store/actions/inputActions';

function BattleRoyaleInput() {
  const input = useSelector(state => state.input);
  const dispatch = useDispatch();
  const update = (value, inputName) => dispatch(updateInput(value, inputName));

  const updateState = (valueName, value) => {
    const sanitizedValue = Number.isInteger(parseInt(value)) ? +value : '';
    update(sanitizedValue, valueName);
  };

  return (
    <div className='br_section mode_section'>
      <h3 className='mode_title'>Battle Royale</h3>
      <StandardInput
        name='Level'
        value={input.level}
        type='text'
        onChange={value => updateState('level', value)}
      />
      <StandardInput
        name='Experience'
        value={input.experience}
        type='text'
        onChange={value => updateState('experience', value)}
      />
      <StandardInput
        name='Playtime XP'
        value={input.playtimeXP}
        type='text'
        infoBox='Average amount of xp you plan on gaining daily outside punch card, daily, and weekly challenges.'
        onChange={value => updateState('playtimeXP', value)}
      />
      <StandardInput
        name='Unfinished XP'
        value={input.unfinishedXP}
        type='text'
        infoBox='XP currently able to obtained. ie, uncompleted challenges, punch card, etc.'
        onChange={value => updateState('unfinishedXP', value)}
      />
      <WeeklyInput
        label='Punch Card Days'
        infoBox='Days you plan on completing your daily medal punch card.'
        states={input.punchCardStates}
        setStates={value => update(value, 'punchCardStates')}
      />
      <WeeklyInput
        label='Daily Challenge Days'
        infoBox={`Days you plan on doing your daily challenges. Since
          daily challenges don't need to be completed on the day of, you
          can use it to count how many dailies you plan to do a week in total.`}
        states={input.dailyBRStates}
        setStates={value => update(value, 'dailyBRStates')}
      />
    </div>
  );
}

export default BattleRoyaleInput;
