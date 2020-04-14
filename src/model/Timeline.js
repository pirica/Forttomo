import { vbucksFromLogin, expectedXPOnDay, itemsFromLevels } from './reference';

function Timeline(data) {
  let {
    vbucks,
    averageAlerts,
    level,
    experience,
    playtimeXP,
    unfinishedXP,
    punchCardStates,
    dailyBRStates,
    dailySTWStates,
    dailyAlertsStates,
    loginDayStates,
    loginDay,
    amountOfDays,
    battlePass,
  } = data;

  vbucks = Number.isInteger(vbucks) ? vbucks : 0;
  level = Number.isInteger(level) ? level : 1;
  experience = Number.isInteger(experience) ? experience : 0;
  playtimeXP = Number.isInteger(playtimeXP) ? playtimeXP : 0;
  unfinishedXP = Number.isInteger(unfinishedXP) ? unfinishedXP : 0;
  battlePass = battlePass ? battlePass : {};

  const dateFormat = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  };

  let xpGained = experience + unfinishedXP;
  const oldLevel = level;
  level = Math.floor(level + xpGained / 80000);

  // The remainder of the xp after the level ups were performed
  xpGained = xpGained % 80000;

  const availableItems = itemsFromLevels(oldLevel, level);
  const firstDayData = {
    date: 'NOW',
    vbucks: vbucks,
    level: level,
    change: '',
    bpItems: availableItems,
  };

  const timeline = [firstDayData];

  for (let day = 1; day <= amountOfDays; day++) {
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
    if (punchCardStates[currentWeekday]) {
      xpGained += (5 + 5 + 5 + 5 + 10) * 2 * 1000;
    }

    // XP from daily challenge
    if (dailyBRStates[currentWeekday]) xpGained += 31000;

    // XP gained from each weekly
    xpGained += expectedXPOnDay(currentDate);

    // XP gained from playing the game or other misc ways
    xpGained += playtimeXP;

    const yesterdaysLevel = timeline[timeline.length - 1].level;
    const currentLevel = Math.floor(level + xpGained / 80000);

    const bpItems = itemsFromLevels(yesterdaysLevel, currentLevel, battlePass);

    let bpVbucks = 0;
    for (let item of bpItems) {
      if (item.type === 'currency') bpVbucks += 100;
    }

    if (bpVbucks) gainedVbucks += bpVbucks;

    const dateString = currentDate.toLocaleString('en-US', dateFormat);
    const newTotal = timeline[timeline.length - 1].vbucks + gainedVbucks;

    const dayData = {
      date: dateString,
      vbucks: newTotal,
      level: currentLevel,
      change: `+${gainedVbucks}`,
      bpItems: bpItems,
    };

    timeline.push(dayData);
  }

  return timeline;
}

export default Timeline;
