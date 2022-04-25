/**
 * @param {number} month
 * @param {number} week
 * @param {number} day
 * @param {string} time
 * @param {number} year
 */

const weeksOfMonth = require("./weeks-of-month")

module.exports = function({ month = null, week = null, day = null, time = "12:30", year = new Date().getFullYear() }) {
    if(month === null || week === null || day === null) return

    month = +month
    week = +week
    day = +day

    const isRightMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month)
    const isRightWeek = [0, 1, 2, -1].includes(week)
    const isRightTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    const isRightDay = [0, 1, 2, 3, 4, 5, 6].includes(day)
    if(!isRightMonth || !isRightWeek || !isRightDay || !isRightTime) return

    let weeks, date
    weeks = weeksOfMonth({ month, year, parse: true })

    if(week === -1) week = weeks.length - 1

    switch(weeks[week][day]) {
        case "0":
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week + 1][day] + " " + time)
            break
        case "00":
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week - 1][day] + " " + time)
            break
        default:
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week][day] + " " + time)
            break
    }
    return date
}