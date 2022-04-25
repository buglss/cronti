/**
 * @param {Date} date
 */

module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    return (date.getTime() - new Date().getTime()) / 1000
}