/**
 * @param {Date} date
 * @param {number} firstDayOfWeek
 */

module.exports = function(firstDayOfWeek = 0, date) {
    const isRightDay = [0, 1, 2, 3, 4, 5, 6].includes(Number(firstDayOfWeek))
    if(!isRightDay || !date) return

    date = new Date(date)

    if(isNaN(date)) return

    return ~((firstDayOfWeek - date.getDay() - 7) % 7) + 1
}