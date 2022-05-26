/**
 * Returns the crontime equivalent of the entered date value, repeated every month and every year.
 * 
 * @param {Date} date Used date for crontime
 * 
 * @returns {String} Crontime
 * 
 * @summary Generate crontime of the spesific date
 * 
 * @example
 * // Returns "30 12 26 * *"
 * onDate("2022-05-26T09:30:00.000Z")
 */

module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    let days = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + days + " * *"
}