const isValidCronExpression = require("../lib/is-valid-cron-expression")

/**
 * Returns the crontime of the valid crontime expression.
 * Returns undefined if invalid crontime expression.
 * 
 * @param {String} crontime Crontime
 * 
 * @returns {String} Crontime
 * 
 * @summary Enter valid crontime expression get crontime expression.
 * 
 * @example
 * // returns "0 2 * * *"
 * onCrontime("0 2 * * *")
 * 
 * @license GPL-3.0
 */

module.exports = function(crontime) {
    if(!isValidCronExpression(crontime)) return

    return crontime
}