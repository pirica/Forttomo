import BattlePassVbucks from './../data/BattlePassVbucks';
import LoginVbucks from './../data/LoginVbucks';

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
