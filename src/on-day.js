/**
 * Returns the crontime equivalent of the entered date value, repeating every year.
 * The crontime expression that will be triggered before the entered date according to the tick value is returned.
 * 
 * @param {Date} date Used date for crontime
 * @param {Number} [tick=0] The number of days to subtract from the date.
 * 
 * @returns {String} Crontime
 * 
 * @summary Generate crontime of the spesific date
 * 
 * @example
 * // returns "30 12 26 5 *"
 * onDay("2022-05-26T09:30:00.000Z")
 * 
 * @example
 * // returns "30 12 24 5 *"
 * onDay("2022-05-26T09:30:00.000Z", 2)
 * 
 * @license GPL-3.0
 */

module.exports = function(date, tick = 0) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date) || isNaN(+tick)) return

    date.setDate(date.getDate() - Number(tick))

    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + day + " " + month + " *"
}