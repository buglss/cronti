/**
 * @param {Date} startDate
 * @param {Date} endDate
 * @param {string} period
 */

module.exports = function(startDate, endDate, period) {
    if(!startDate || !endDate) return

    date = new Date(startDate)
    endDate = new Date(endDate)

    if(isNaN(startDate) || isNaN(endDate)) return

    let hours = startDate.getHours()
    let minutes = startDate.getMinutes()
    let startDateDay = startDate.getDate()
    let endDateDay = endDate.getDate()
    let startDateMonth = startDate.getMonth()
    let endDateMonth = endDate.getMonth()
    let intervalDay = startDateDay + "-" + endDateDay
    let intervalMonth = startDateMonth + "-" + endDateMonth

    if(period) {
        if(~period.indexOf("g")) intervalDay = intervalDay + "/" + period.split("g")[0]
        else if(~period.indexOf("s")) hours = "*" + "/" + period.split("s")[0]
        else if(~period.indexOf("dk")) minutes = "*" + "/" + period.split("dk")[0]
    }

    return minutes + " " + hours + " " + intervalDay + " " + intervalMonth + " *"
}