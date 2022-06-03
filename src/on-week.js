const diffSecondsUptoToday = require("../lib/diff-seconds-upto-today")
const weekOfDate = require("../lib/week-of-date")

/**
 * The crontime expression that will be triggered every day of the week that the entered date is in returns.
 * The crontime expression that will be triggered before the entered date based on the tick value is returned.
 * 
 * @param {Date} date Date of the week for crontime
 * @param {Number=} [tick=0] The number of days to subtract from the date.
 * @param {Number=} [firstDayOfWeek=1] First day of week. It takes values between 0 and 6.
 * 
 * @returns {String} Crontime
 * 
 * @summary Generates the cron time for the week the date is in.
 * 
 * @example
 * // returns "30 12 22-28 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z")
 * 
 * @example
 * // returns "30 12 20-28 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", 2)
 * 
 * @example
 * // returns "30 12 21-27 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", 0)
 * 
 * @example
 * // returns "30 12 19-27 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", 2, 0)
 * 
 * @license GPL-3.0
 */

module.exports = function(date, tick = 0, firstDayOfWeek = 1) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date) || isNaN(+tick)) return

    let thisYear = new Date().getFullYear()
    let diff = 0
    let year = date.getFullYear()

    if(year === thisYear) {
        diff = diffSecondsUptoToday(date)
        if(diff < 0) date.setFullYear(thisYear + 1)
    }
    else date.setFullYear(thisYear + 1)

    let wod = weekOfDate(date, firstDayOfWeek)

    if(!wod) return

    let week = wod.week
    let month = date.getMonth()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let firstDay = week[0]
    let lastDay = week[week.length - 1]
    let firstMonth = month

    if(tick) {
        let startDate = new Date(date.getFullYear(), month, firstDay)

        startDate.setDate(startDate.getDate() - Number(tick))

        firstDay = startDate.getDate()
        firstMonth = startDate.getMonth()
    }

    return `${minutes} ${hours} ${firstDay}-${lastDay} ${++firstMonth}-${++month} *`
}