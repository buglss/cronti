/**
 * Returns the crontime equivalent of the entered date value, repeating every year.
 * The crontime expression that will be triggered before the entered date according to the tick value is returned.
 * 
 * @param {Array} args Used date for crontime and the number of days to subtract from the date.
 * @param {Date} args.date Valid date string
 * @param {Number} args.tick Number of tick time
 * 
 * @returns {String} Crontime
 * 
 * @summary Generate crontime of the spesific day of date.
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

module.exports = function(...args) {
    let date, tick
    for(let arg of args) {
        if(!date && isNaN(date)) date = new Date(arg);
        if(!tick && typeof arg === "number") tick = arg;
        if(date && tick) break;
    }

    if(!date && isNaN(date)) return ""

    tick = tick || 0

    date.setDate(date.getDate() - Number(tick))

    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + day + " " + month + " *"
}