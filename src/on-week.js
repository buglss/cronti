/**
 * @param {Date} date
 * @param {number} tick
 */

const secondsDiffFromToday = require("../lib/seconds-diff-from-today")
const weekOfDate = require("../lib/week-of-date")

module.exports = function(date, tick = 0) {
    if(!date) return

    date = new Date(payload.date)

    if(isNaN(date)) return

    let thisYear = new Date().getFullYear()
    let diff, year = date.getFullYear()

    if(year === thisYear) {
        diff = secondsDiffFromToday(date)
        if(diff < 0) date.setFullYear(thisYear + 1)
    } else date.setFullYear(thisYear + 1)

    let wid = weekOfDate(date).week

    if(!wid) return

    let week = wid.week
    let month = date.getMonth()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let firstDay = week[0]
    let lastDay = week[week.length - 1]

    if(tick) {
        let thisMonth = Number(month),
            startDate = new Date(thisYear + "/" + (thisMonth + 1) + "/" + firstDay)

        startDate.setDate(startDate.getDate() - Number(tick))

        firstDay = startDate.getDate()
        lastDay = firstDay
        month = startDate.getMonth()
    }

    return minutes + " " + hours + " " + firstDay + "-" + lastDay + " " + month + " *"
}