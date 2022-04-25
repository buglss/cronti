/**
 * @param {Date} date
 */

const weeksOfMonth = require("./weeks-of-month")

module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    let month = date.getMonth()
    let year = date.getFullYear()
    let weeks = weeksOfMonth({ month, year, parse: true, fill: false })
    let week = weeks.findIndex(x => x.includes(date.getDate() + ""))

    return { week: weeks[week], weeks, total: weeks.length, index: week }
}