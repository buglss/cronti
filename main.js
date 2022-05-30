const onDay = require("./src/on-day")
const onWeek = require("./src/on-week")
const onIntervalTime = require("./src/on-interval-time")
const onTime = require("./src/on-time")
const onCrontime = require("./src/on-crontime")
const onDate = require("./src/on-date")

const methods = [onDay, onWeek, onIntervalTime, onTime, onCrontime, onDate]
const methodIndexLookup = { "onDay": 0, "onWeek": 1, "onIntervalTime": 2, "onTime": 3, "onCrontime": 4, "onDate": 5 }

/**
 * It translates humanly expressible recipes on the calendar into crontime expression.
 * Produces a valid crontime expression.
 * In summary:
 *  creates a crontime that will run at regular intervals between two dates;
 *  enter valid crontime expression get crontime expression;
 *  generate crontime of the specific date;
 *  generate crontime of the specific date;
 *  create crontime with various combinations of month, week, weekdays, hours, minutes and tick and generates the cron time for the week the date is in.
 * 
 * @param {Number|String} method Metod index or name. onDay, onWeek, onIntervalTime, onTime, onCrontime, onDate
 * @param {Array} args Arguments to metods
 * 
 * @returns {String} Crontime
 * 
 * @summary Produces a valid crontime expression.
 * 
 * @license GPL-3.0
 */
module.exports = function(method, ...args) {
    const methodIndex = typeof method === "number" ? method : methodIndexLookup[method]
    return methods[methodIndex](...args)
}