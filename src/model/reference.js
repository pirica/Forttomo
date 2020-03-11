import BattlePassVbucks from './../data/BattlePassVbucks';
import BattlePassItems from './../data/BattlePassItems';
import LoginVbucks from './../data/LoginVbucks';
import KnownChallenges from './../data/KnownChallenges';

export const vbucksFromLevel = level => {
  let vbucks = 0;

  for (const entry of BattlePassVbucks) {
    if (entry.level === level) vbucks = entry.vbucks;
  }

  return vbucks;
};

export const vbucksFromLogin = loginDay => {
  let vbucks = 0;

  for (const entry of LoginVbucks) {
    if (entry.day === loginDay) vbucks = entry.vbucks;
  }

  return vbucks;
};

export const expectedXPOnDay = date => {
  const year = date.getUTCFullYear();
  const month = parseInt(date.getUTCMonth()) + 1;
  const day = date.getUTCDate();
  const formattedDate = year + '-' + month + '-' + day;
  let expectedXP = 0;

  for (const challengeDate in KnownChallenges) {
    if (formattedDate === challengeDate) {
      for (const challenge of KnownChallenges[challengeDate]) {
        expectedXP += challenge.amountOfXP;
      }
    }
  }

  return expectedXP;
};

export const itemsForLevel = level => {
  let items = [];

  if (level <= 100 && level >= 1) items = BattlePassItems[level];

  return items;
};
