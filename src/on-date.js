/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

/**
 * Returns the crontime equivalent of the entered date value, repeated every month and every year.
 * 
 * @param {Array} args Used date for crontime
 * @param {Date} args.date Valid date string
 * @param {Number} args.tick Number of tick time
 * @param {Boolean} args.isMonthOfDate Execute only in month of date
 * 
 * @returns {String} Crontime
 * 
 * @summary Generate crontime of the spesific date.
 * 
 * @example
 * // Returns "30 12 26 * *"
 * onDate("2022-05-26T09:30:00.000Z")
 * 
 * @example
 * // returns "30 12 24 * *"
 * onDay("2022-05-26T09:30:00.000Z", 2)
 * 
 * @example
 * // Returns "30 12 26 5 *"
 * onDate("2022-05-26T09:30:00.000Z", true)
 * 
 * @example
 * // returns "30 12 24 5 *"
 * onDay("2022-05-26T09:30:00.000Z", 2, true)
 * 
 * @license Apache-2.0
 */

module.exports = function(...args) {
    let date, tick, isMonthOfDate
    for(let arg of args) {
        if(!date && isNaN(date)) date = new Date(arg);
        if(!tick && typeof arg === "number") tick = arg;
        if(!isMonthOfDate && typeof arg === "boolean") isMonthOfDate = arg;
        if(date && tick && isMonthOfDate) break;
    }

    if(!date && isNaN(date)) return ""

    date.setDate(date.getDate() - Number(tick || 0))

    let month = isMonthOfDate ? date.getMonth() + 1 : "*"
    let days = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    return minutes + " " + hours + " " + days + " " + month + " *"
}