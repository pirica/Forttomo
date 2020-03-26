import { vbucksFromLogin, expectedXPOnDay, itemsFromLevels } from './reference';

function Timeline(
  vbucks,
  averageAlerts,
  level,
  experience,
  extraXP,
  unfinishedXP,
  punchCardDays,
  dailyChallengeDays,
  loginDay,
  amountOfDays
) {
  const dateFormat = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  };

  let xpGained = experience + unfinishedXP;
  const oldLevel = level;
  level = Math.floor(level + xpGained / 80000);
  // The remainder of the xp after the level ups were performed
  xpGained = xpGained % 80000;

  const availableItems = itemsFromLevels(oldLevel, level);
  const timeline = [new Day('NOW', vbucks, level, [], availableItems)];

  for (let day = 1; day <= amountOfDays; day++) {
    let bpItems = [];
    let gainedVbucks = 0;

    const daily = 50;
    gainedVbucks += daily;

    if (averageAlerts) {
      gainedVbucks += averageAlerts;
    }

    const loginVbucks = vbucksFromLogin(loginDay + day + 1);
    if (loginVbucks) {
      gainedVbucks += loginVbucks;
    }

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + day);
    // XP gained from the daily punch card
    if (punchCardDays[currentDate.getUTCDay()]) {
      xpGained += (5 + 5 + 5 + 5 + 10) * 2 * 1000;
    }

    // XP from daily challenge
    if (dailyChallengeDays[currentDate.getUTCDay()]) xpGained += 31000;

    // XP gained from each weekly
    xpGained += expectedXPOnDay(currentDate);

    // XP gained from playing the game or other misc ways
    xpGained += extraXP;

    const yesterdaysLevel = timeline[timeline.length - 1].level;
    const currentLevel = Math.floor(level + xpGained / 80000);

    bpItems = itemsFromLevels(yesterdaysLevel, currentLevel);

    let bpVbucks = 0;
    for (let item of bpItems) {
      if (item.type === 'currency') bpVbucks += 100;
    }

    if (bpVbucks) {
      gainedVbucks += bpVbucks;
    }

    const dateString = currentDate.toLocaleString('en-US', dateFormat);
    const newTotal = timeline[timeline.length - 1].vbucks + gainedVbucks;
    timeline.push(
      new Day(dateString, newTotal, currentLevel, `+${gainedVbucks}`, bpItems)
    );
  }

  return timeline;
}

class Day {
  constructor(date, vbucks, level, change, bpItems) {
    this.date = date;
    this.vbucks = vbucks;
    this.level = level;
    this.change = change;
    this.bpItems = bpItems;
  }
}

export default Timeline;
