import { vbucksFromLogin, expectedXPOnDay, itemsFromLevels } from './reference';

function Timeline(
  vbucks,
  averageAlerts,
  level,
  experience,
  extraXP,
  unfinishedXP,
  punchCardDays,
  dailyBRStates,
  dailySTWStates,
  dailyAlertsStates,
  loginDayStates,
  loginDay,
  amountOfDays
) {
  vbucks = Number.isInteger(vbucks) ? vbucks : 0;
  level = Number.isInteger(level) ? level : 1;
  experience = Number.isInteger(experience) ? experience : 0;
  extraXP = Number.isInteger(extraXP) ? extraXP : 0;
  unfinishedXP = Number.isInteger(unfinishedXP) ? unfinishedXP : 0;

  const dateFormat = {
    weekday: 'short',
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

    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + day);
    const currentWeekday = currentDate.getUTCDay();

    // Vbucks gained from StW missions and alerts
    if (dailySTWStates[currentWeekday]) gainedVbucks += 50;
    if (dailyAlertsStates[currentWeekday]) gainedVbucks += averageAlerts;

    // Vbucks gained from logging in StW
    if (loginDayStates[currentWeekday]) {
      loginDay += 1;
      gainedVbucks += vbucksFromLogin(loginDay);
    }

    // XP gained from the daily punch card
    if (punchCardDays[currentWeekday]) {
      xpGained += (5 + 5 + 5 + 5 + 10) * 2 * 1000;
    }

    // XP from daily challenge
    if (dailyBRStates[currentWeekday]) xpGained += 31000;

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
