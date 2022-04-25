/**
 * @param {number} month
 * @param {number} week
 * @param {number} year
 */

const weeksOfMonth = require("./weeks-of-month")

module.exports = function({ month = null, week = null, year = new Date().getFullYear() }) {
    if(month === null || week === null) return

    month = Number(month)
    week = Number(week)

    const isRightMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month)
    const isRightWeek = [0, 1, 2, -1].includes(week)
    if(!isRightMonth || !isRightWeek) return

    let weeks = weeksOfMonth({ month, year, parse: true, fill: false })

    if(week === -1) week = weeks.length - 1

    return weeks[week]
}