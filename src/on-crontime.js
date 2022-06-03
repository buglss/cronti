const isValidCronExpression = require("../lib/is-valid-cron-expression")

/**
 * Returns the crontime of the valid crontime expression.
 * Returns undefined if invalid crontime expression.
 * 
 * @param {Array} args Crontime
 * @param {String} args.crontime Valid crontime expression
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

module.exports = function(...args) {
    let crontime
    for(let arg of args) {
        if(!crontime && typeof arg === "string" && isValidCronExpression(arg)) crontime = arg;
        if(crontime) break;
    }

    if(!crontime) return ""

    return crontime
}