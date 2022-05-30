/**
 * Returns the crontime equivalent of the entered date value, repeated every month and every year.
 * 
 * @param {Array} args Used date for crontime
 * 
 * @returns {String} Crontime
 * 
 * @summary Generate crontime of the spesific date.
 * 
 * @example
 * // Returns "30 12 26 * *"
 * onDate("2022-05-26T09:30:00.000Z")
 * 
 * @license GPL-3.0
 */

module.exports = function(...args) {
    let date
    for(let arg of args) {
        if(!date && isNaN(date)) date = new Date(arg);
        if(date) break;
    }

    if(!date && isNaN(date)) return ""

    let days = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + days + " * *"
}