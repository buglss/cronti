/**
 * It allows you to log styled. It increases readability.
 * 
 * @param {String} text The text of the console
 * 
 * @returns {Boolean} Operation result
 * 
 * @summary Logs to console
 * 
 * @license GPL-3.0
 */

module.exports = function(text) {
    if(!text) return false

    let timestamp = new Date().toISOString()

    console.log()
    console.log(`############################ ${timestamp} ############################`)
    console.log("#", text)
    console.log(`##################################################################################`)
    console.log()

    return true
}