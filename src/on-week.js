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

const diffSecondsUptoToday = require("../lib/diff-seconds-upto-today")
const weekOfDate = require("../lib/week-of-date")

/**
 * The crontime expression that will be triggered every day of the week that the entered date is in returns.
 * The crontime expression that will be triggered before the entered date based on the tick value is returned.
 * 
 * @param {Array} args Date of the week for crontime and the number of days to subtract from the date.
 * @param {Date} args.date Valid date string
 * @param {Number} args.tick Number of tick time
 * @param {String|..FD} args.firstDayOfWeek First day of week. It takes values between 0 and 6. It takes value <digit>FD.
 * 
 * @returns {String} Crontime
 * 
 * @summary Generates the cron time for the week the date is in.
 * 
 * @example
 * // returns "30 12 22-28 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z")
 * 
 * @example
 * // returns "30 12 20-28 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", 2)
 * 
 * @example
 * // returns "30 12 21-27 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", "0FD")
 * 
 * @example
 * // returns "30 12 19-27 5-5 *"
 * onWeek("2022-05-26T09:30:00.000Z", 2, "0FD")
 * 
 * @license Apache-2.0
 */

module.exports = function(...args) {
    let date, tick, firstDayOfWeek
    for(let arg of args) {
        if(!date || isNaN(date)) date = new Date(arg);
        if(!tick && typeof arg === "number") tick = arg;
        if(!firstDayOfWeek && typeof arg === "string" && /^\dFD$/.test(arg) && isNaN(firstDayOfWeek)) (firstDayOfWeek = +(arg.replace(/FD/g, "")), [0, 1, 2, 3, 4, 5, 6].includes(firstDayOfWeek) ? firstDayOfWeek : false);
        if(date && tick && firstDayOfWeek) break;
    }

    if(!date || isNaN(date)) return ""

    tick = tick || 0

    let thisYear = new Date().getFullYear()
    let diff = 0
    let year = date.getFullYear()

    if(year === thisYear) {
        diff = diffSecondsUptoToday(date)
        if(diff < 0) date.setFullYear(thisYear + 1)
    }
    else date.setFullYear(thisYear + 1)

    let wod = weekOfDate(date, firstDayOfWeek)

    if(!wod) return ""

    let week = wod.week
    let month = date.getMonth()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let firstDay = week[0]
    let lastDay = week[week.length - 1]
    let firstMonth = month

    if(tick) {
        let startDate = new Date(date.getFullYear(), month, firstDay)

        startDate.setDate(startDate.getDate() - Number(tick))

        firstDay = startDate.getDate()
        firstMonth = startDate.getMonth()
    }

    return `${minutes} ${hours} ${firstDay}-${lastDay} ${++firstMonth}-${++month} *`
}