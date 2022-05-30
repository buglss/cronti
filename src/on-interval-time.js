/**
 * Creates crontime based on start and end date. 
 * According to step parameter, it is specified in which intervals it will work between two dates.
 * The step parameter is used in days, hours or minutes.
 * 
 * @param {Array} args Cron start date, cron end date and specifies at what steps to run.
 * 
 * @returns {String} crontime
 * 
 * @summary Creates a crontime that will run at regular intervals between two dates.
 * 
 * @example
 * // returns "30 12 25-15 4-5 *"
 * intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
 * 
 * @example
 * // returns "30 12 10-20/4 6-7 *"
 * intervalTime("2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
 * 
 * @example
 * // returns "30 *<spaceless>/2 1-5 4-7 *" // Added <spaceless> because broke comment line
 * intervalTime("2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
 * 
 * @example
 * // returns "*<spaceless>/30 12 1-2 4-4 *" // Added <spaceless> because broke comment line
 * intervalTime("2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
 * 
 * @license GPL-3.0
 */

module.exports = function(...args) {
    let startDate, endDate, step
    for(let arg of args) {
        if(startDate && !isNaN(startDate) && !endDate && isNaN(endDate)) endDate = new Date(arg);
        if(!startDate && isNaN(startDate)) startDate = new Date(arg);
        if(!step && typeof arg === "string" && /^[0-9]{1,3}(d|h|m)$/.test(arg) && !isNaN(+arg.replace(/d|h|m/g, ""))) step = arg;
        if(startDate && endDate && step) break;
    }

    if((!startDate && isNaN(startDate)) || (!endDate && isNaN(endDate))) return ""

    if(startDate > endDate) [startDate, endDate] = [endDate, startDate]

    let hours = startDate.getHours()
    let minutes = startDate.getMinutes()
    let startDateDay = startDate.getDate()
    let endDateDay = endDate.getDate()
    let startDateMonth = startDate.getMonth() + 1
    let endDateMonth = endDate.getMonth() + 1
    let dayInterval = startDateDay + "-" + endDateDay
    let monthInterval = startDateMonth + "-" + endDateMonth

    if(step) {
        if(~step.indexOf("d")) dayInterval = dayInterval + "/" + step.split("d")[0]
        else if(~step.indexOf("h")) hours = "*" + "/" + step.split("h")[0]
        else if(~step.indexOf("m")) minutes = "*" + "/" + step.split("m")[0]
    }

    return minutes + " " + hours + " " + dayInterval + " " + monthInterval + " *"
}