import { vbucksFromLogin, expectedXPOnDay, itemsFromLevels } from './reference';

function Timeline(
  vbucks,
  averageAlerts,
  level,
  experience,
  extraXP,
  unaccountedXP,
  punchCardDays,
  dailyChallengeDays,
  loginDay,
  syncDate,
  amountOfDays
) {
  const dateFormat = {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC'
  };

  let xpGained = experience + unaccountedXP;
  const oldLevel = level;
  level = Math.floor(level + xpGained / 80000);
  // The remainder of the xp after the level ups were performed
  xpGained = xpGained % 80000;

  const availableItems = itemsFromLevels(oldLevel, level);
  const timeline = [new Day('NOW', vbucks, level, [], availableItems)];
  const syncDateDistance =
    (new Date() - new Date(syncDate)) / (1000 * 60 * 60 * 24);
  const baseLoginDay = Math.floor(syncDateDistance) + loginDay;

  for (let day = 1; day <= amountOfDays; day++) {
    const logs = [];
    let bpItems = [];
    let gainedVbucks = 0;

    const daily = 50;
    gainedVbucks += daily;
    logs.push(new VbuckLog(daily, 'daily'));

    if (averageAlerts) {
      gainedVbucks += averageAlerts;
      logs.push(new VbuckLog(averageAlerts, 'alert'));
    }

    const loginVbucks = vbucksFromLogin(baseLoginDay + day + 1);
    if (loginVbucks) {
      gainedVbucks += loginVbucks;
      logs.push(new VbuckLog(loginVbucks, 'login'));
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
      logs.push(new VbuckLog(bpVbucks, 'battle_pass'));
    }

    const dateString = currentDate.toLocaleString('en-US', dateFormat);
    const newTotal = timeline[timeline.length - 1].vbucks + gainedVbucks;
    timeline.push(new Day(dateString, newTotal, currentLevel, logs, bpItems));
  }

  return timeline;
}

class Day {
  constructor(date, vbucks, level, logs, bpItems) {
    this.date = date;
    this.vbucks = vbucks;
    this.level = level;
    this.logs = logs;
    this.bpItems = bpItems;
  }
}

class VbuckLog {
  constructor(amount, type) {
    this.amount = amount;
    this.type = type;
  }
}

export default Timeline;
