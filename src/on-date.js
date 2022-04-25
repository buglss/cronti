/**
 * @param {Date} date
 * @param {string} time
 */

module.exports = function(date, time = "12:30") {
    if(!date) return

    const isRightTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    if(!isRightTime) return

    let [hours, minutes] = time.split(":")

    return minutes + " " + hours + " " + date + " * *"
}