const weeksOfMonth = require("./weeks-of-month")

/**
 * Returns week, weeks, total of the weeks and index of the week from date.
 * 
 * @param {Date} date
 * @param {Number} [firstDayOfWeek = 1] It is the first day of the week. For example, Monday(1) in Turkey, Sunday(0) in America
 * 
 * @returns {Object.<{week: Array.<String>, weeks: Array.<Array.<String>>, total: Number, index: Number}>}
 * 
 * @summary Get week object of date
 * 
 * @example
 * // returns {
 * //     week: ["23", "24", "25", "26", "27", "28", "29"],
 * //     weeks: [
 * //         ["1"],
 * //         ["2", "3", "4", "5", "6", "7", "8"],
 * //         ["9", "10", "11", "12", "13", "14", "15"],
 * //         ["16", "17", "18", "19", "20", "21", "22"],
 * //         ["23", "24", "25", "26", "27", "28", "29"],
 * //         ["30", "31"]
 * //     ],
 * //     total: 6,
 * //     index: 4
 * // }
 * weekOfDate("2022-05-24T00:00:00.000Z")
 */

module.exports = function(date, firstDayOfWeek = 1) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    let month = date.getMonth()
    let year = date.getFullYear()
    let dateVal = date.getDate() + "" // to string
    let weeks = weeksOfMonth({ month, year, parse: true, fill: false, firstDayOfWeek })
    let week = weeks.findIndex(x => x.includes(dateVal))

    return { week: weeks[week], weeks, total: weeks.length, index: week }
}