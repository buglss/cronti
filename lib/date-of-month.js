const weeksOfMonth = require("./weeks-of-month")

/**
 * Returns the date of the day of the week of the month.
 * The weeks are referred to as the first(0), second(1), third(2), and last(-1).
 * 
 * @param {Object} options Options
 * @param {Number} options.month The month to use for the date value
 * @param {Number} options.week The week to use for the date value
 * @param {Number} options.weekDays The weekdays to use for the date value
 * @param {String} [options.time = "12:30"] The time to use for the date value
 * @param {Number} [options.year = new Date().getFullYear()] The year to use for the date value
 * @param {Number} [options.firstDayOfWeek = 1] It is the first day of the week. For example, Monday(1) in Turkey, Sunday(0) in America
 * 
 * @returns {Date} Date of day
 * 
 * @summary Get date by day of the week of the month
 * 
 * @example
 * // returns 2022-05-04T09:30:00.000Z
 * dateOfMonth({month: 4, week: 0, day: 2, year: 2022})
 * 
 * @example
 * // returns 2022-04-08T09:30:00.000Z
 * dateOfMonth({month: 3, week: 1, day: 4, year: 2022})
 * 
 * @example
 * // returns 2022-05-10T12:45:00.000Z
 * dateOfMonth({month: 4, week: 2, day: 1, year: 2022, time: "15:45"})
 * 
 * @example
 * // returns 2022-04-28T06:30:00.000Z
 * dateOfMonth({month: 3, week: -1, day: 3, year: 2022, time: "09:30"})
 */

module.exports = function({ month, week, weekDays, time = "12:30", year = new Date().getFullYear(), firstDayOfWeek = 1 }) {
    if((!month && month !== 0) || (!week && week !== 0) || (!weekDays && weekDays !== 0)) return

    // To Number
    month = +month
    week = +week
    weekDays = +weekDays

    const isValidMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month)
    const isValidWeek = [0, 1, 2, -1].includes(week)
    const isValidDay = [0, 1, 2, 3, 4, 5, 6].includes(weekDays)
    const isValidTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    if(!isValidMonth || !isValidWeek || !isValidDay || !isValidTime) return

    let weeks, date
    weeks = weeksOfMonth({ month, year, parse: true, firstDayOfWeek })

    // Get Last Week
    if(week === -1) week = weeks.length - 1

    switch(weeks[week][weekDays]) {
        case "0":
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week + 1][weekDays] + " " + time)
            break
        case "00":
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week - 1][weekDays] + " " + time)
            break
        default:
            date = new Date(year + "-" + (month + 1) + "-" + weeks[week][weekDays] + " " + time)
            break
    }

    return date
}