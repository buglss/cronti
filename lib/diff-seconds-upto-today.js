/**
 * Returns the difference in seconds between now and the entered date.
 * 
 * @param {Date} date Date value to be difference
 * 
 * @returns {Number} Seconds Difference Value
 * 
 * @summary Get difference of seconds up to today
 */

module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    return (date.getTime() - new Date().getTime()) / 1000
}