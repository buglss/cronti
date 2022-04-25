/**
 * @param {Date} date
 * @param {number} tick
 */

module.exports = function(date, tick = 0) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    date.setDate(date.getDate() - Number(tick))

    let day = date.getDate()
    let month = date.getMonth()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + day + " " + month + " *"
}