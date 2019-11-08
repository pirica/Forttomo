import { vbucksFromLevel, vbucksFromLogin } from './reference';

function Timeline(_vbucks, level, _experience, _loginDay, amountOfDays) {
    let vbucks = _vbucks;
    let experience = _experience;
    let loginDay = _loginDay;
    const punchCardXP = (8 + 8 + 8 + 8 + 16) * 2 * 1000;

    const timeline = [new Day(new Date(), vbucks, level, [])];

    for (let day = 0; day < amountOfDays; day++) {
        const logs = [];

        const missions = 50;
        vbucks += missions;
        logs.push(new VbuckLog(missions, 'Missions'));

        const daily = 50;
        vbucks += daily;
        logs.push(new VbuckLog(daily, 'Daily'));

        loginDay += 1;
        const loginVbucks = vbucksFromLogin(loginDay);
        if (loginVbucks) {
            vbucks += loginVbucks;
            logs.push(new VbuckLog(loginVbucks, 'Login'));
        }

        experience += punchCardXP;
        const currentLevel = Math.floor(level + experience / 80000);
        const bpVbucks = vbucksFromLevel(currentLevel);
        if (bpVbucks) {
            vbucks += bpVbucks;
            logs.push(new VbuckLog(bpVbucks, 'Battle Pass'));
        }

        const previousDate = timeline[timeline.length - 1].date;
        const currentDate = new Date(
            previousDate.getTime() + 24 * 60 * 60 * 1000
        );
        timeline.push(new Day(currentDate, vbucks, currentLevel, logs));
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
