import { vbucksFromLevel, vbucksFromLogin } from './reference';

function Timeline(vbucks, level, experience, loginDay, amountOfDays) {
    const dateFormat = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'
    };

    let xpGained = experience;
    const timeline = [new Day('NOW', vbucks, level, [])];

    for (let day = 0; day < amountOfDays; day++) {
        const logs = [];
        let newVbucks = 0;

        const missions = 50;
        newVbucks += missions;
        logs.push(new VbuckLog(missions, 'Missions'));

        const daily = 50;
        newVbucks += daily;
        logs.push(new VbuckLog(daily, 'Daily'));

        const loginVbucks = vbucksFromLogin(loginDay + day + 1);
        if (loginVbucks) {
            newVbucks += loginVbucks;
            logs.push(new VbuckLog(loginVbucks, 'Login'));
        }

        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + day);

        // XP gained from the daily punch card
        xpGained += (8 + 8 + 8 + 8 + 16) * 2 * 1000;
        // XP gained from each weekly
        if (currentDate.getDay() === 4) xpGained += 520000;

        const currentLevel = Math.floor(level + xpGained / 80000);
        const yesterdaysLevel = timeline[timeline.length - 1].level;
        let bpVbucks = 0;
        for (let lvl = yesterdaysLevel + 1; lvl <= currentLevel; lvl++) {
            bpVbucks += vbucksFromLevel(lvl);
        }

        if (bpVbucks) {
            newVbucks += bpVbucks;
            logs.push(new VbuckLog(bpVbucks, 'Battle Pass'));
        }

        const dateString = currentDate.toLocaleString('en-US', dateFormat);
        const newTotal = timeline[timeline.length - 1].vbucks + newVbucks;
        timeline.push(new Day(dateString, newTotal, currentLevel, logs));
    }

    return timeline;
}

class Day {
    constructor(date, vbucks, level, logs) {
        this.date = date;
        this.vbucks = vbucks;
        this.level = level;
        this.logs = logs;
    }
}

class VbuckLog {
    constructor(amount, type) {
        this.amount = amount;
        this.type = type;
    }
}

export default Timeline;
