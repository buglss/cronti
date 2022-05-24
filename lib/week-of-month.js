const weeksOfMonth = require("./weeks-of-month")

/**
 * Returns the days of the week of the month.
 * The weeks are referred to as the first(0), second(1), third(2), and last(-1).
 * 
 * @param {Object} options
 * @param {Number} options.month
 * @param {Number} options.week
 * @param {Number} [options.year = new Date().getFullYear()]
 * 
 * @returns {Array.<String>}
 * 
 * @summary Get day list by week of the month
 * 
 * @example
 * // returns ["1"]
 * weekOfMonth({month: 4, week: 0, year: 2022})
 * 
 * @example
 * // returns ["2", "3", "4", "5", "6", "7", "8"]
 * weekOfMonth({month: 4, week: 1, year: 2022})
 * 
 * @example
 * // returns ["9", "10", "11", "12", "13", "14", "15"]
 * weekOfMonth({month: 4, week: 2, year: 2022})
 * 
 * @example
 * // returns ["30", "31"]
 * weekOfMonth({month: 4, week: -1, year: 2022})
 */
module.exports = function({ month, week, year = new Date().getFullYear() }) {
    if((!month && month !== 0) || (!week && week !== 0)) return

    // To Number
    month = +month
    week = +week

    const isValidMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month)
    const isValidWeek = [0, 1, 2, -1].includes(week)
    if(!isValidMonth || !isValidWeek) return

    let weeks = weeksOfMonth({ month, year, parse: true, fill: false })

    // Get Last Week
    if(week === -1) week = weeks.length - 1

    return weeks[week]
}