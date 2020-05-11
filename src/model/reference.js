import LoginVbucks from './../data/LoginVbucks';
import KnownChallenges from './../data/KnownChallenges';

export const vbucksFromLogin = loginDay => {
  let vbucks = 0;
  // Login day ranges from 1 to 336
  loginDay = ((loginDay - 1) % 336) + 1;

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

export const itemsFromLevels = (startLevel, endLevel, battlePass) => {
  let bpItems = [];

  if (startLevel > 100 || startLevel < 1) return bpItems;
  for (let level = startLevel + 1; level <= endLevel; level++) {
    if (level > 100) break;

    const currentItems = battlePass[level].items;

    for (const index in currentItems) {
      currentItems[index].level = level;
    }

    bpItems = [...bpItems, ...currentItems];
  }

  return bpItems;
};
