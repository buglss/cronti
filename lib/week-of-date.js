const weeksOfMonth = require("./weeks-of-month")

/**
 * Returns week, weeks, total of the weeks and index of the week from date.
 * 
 * @param {Date} date
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
 * weekOfDate(new Date("2022-05-24"))
 */
module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    let month = date.getMonth()
    let year = date.getFullYear()
    let dateVal = date.getDate() + "" // to string
    let weeks = weeksOfMonth({ month, year, parse: true, fill: false })
    let week = weeks.findIndex(x => x.includes(dateVal))

    return { week: weeks[week], weeks, total: weeks.length, index: week }
}