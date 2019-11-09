import { vbucksFromLevel, vbucksFromLogin } from './reference';

function Timeline(_vbucks, level, _experience, _loginDay, amountOfDays) {
    let vbucks = _vbucks;
    let experience = _experience;
    let loginDay = _loginDay;
    const punchCardXP = (8 + 8 + 8 + 8 + 16) * 2 * 1000;

    const dayMilliseconds = 24 * 60 * 60 * 1000;
    const dateFormat = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        timeZone: 'UTC'
    };

    const timeline = [new Day('NOW', vbucks, level, [])];

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

        const currentDate = new Date(
            new Date().getTime() + day * dayMilliseconds
        );

        experience += punchCardXP;
        if (currentDate.getDay() === 4) experience += 520000;
        const currentLevel = Math.floor(level + experience / 80000);
        const yesterdaysLevel = timeline[timeline.length - 1].level;

        let bpVbucks = 0;
        for (let lvl = yesterdaysLevel + 1; lvl <= currentLevel; lvl++) {
            bpVbucks += vbucksFromLevel(lvl);
        }

        if (bpVbucks) {
            vbucks += bpVbucks;
            logs.push(new VbuckLog(bpVbucks, 'Battle Pass'));
        }

        timeline.push(
            new Day(
                currentDate.toLocaleString('en-US', dateFormat),
                vbucks,
                currentLevel,
                logs
            )
        );
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
