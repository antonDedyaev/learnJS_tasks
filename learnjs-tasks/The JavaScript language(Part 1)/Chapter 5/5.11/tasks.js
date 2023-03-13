//Task 1:
const date = new Date(2012, 1, 20, 3, 12);
alert(date);

//Task 2:
function getWeekDay(date) {
    const daysOfWeek = {
        1: 'ПН',
        2: 'ВТ',
        3: 'СР',
        4: 'ЧТ',
        5: 'ПТ',
        6: 'СБ',
        0: 'ВС',
    }
    const day = date.getDay()
    return daysOfWeek[day];
};

//Task 3:
function getLocalDay(date) {
    let day = date.getDay();
    return day > 0 ? day : 7;
};

//Task 4:
function getDateAgo(date, days) {
    let today = new Date(date);
    today.setDate(today.getDate() - days);
    return today;
};

//Task 5:
function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
};

//Task 6:
function getSecondsToday() {
    const date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
};

//Task 7:
function getSecondsToTomorrow() {
    const totalSecondsPerDay = 86400;
    const date = new Date();
    const secondsPassed = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return totalSecondsPerDay - secondsPassed;
};

//Task 8:
function formatDate(date) {
    const mlSecDiff = new Date() - date;

    const secDiff = Math.round(mlSecDiff / 1000);
    const minDiff = Math.round(secDiff / 60);
    const hourDiff = minDiff / 60;

    const year = date.getFullYear();
    const month = date.getMonth()
    const day = date.getDate();
    const h = date.getHours();
    const min = date.getMinutes();

    if (secDiff < 1) {
        return 'прямо сейчас';
    } else if (minDiff < 1) {
        return `${secDiff} сек. назад`;
    } else if (hourDiff < 1) {
        return `${minDiff} мин. назад`;
    } else {
        return `${day}.${month}.${year.toString().slice(-2)} ${h}:${min}`;
    }
};
