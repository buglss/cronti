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

const onWeek = require("./src/on-week")
const onIntervalTime = require("./src/on-interval-time")
const onTime = require("./src/on-time")
const onCrontime = require("./src/on-crontime")
const onDate = require("./src/on-date")

const methods = [onWeek, onIntervalTime, onTime, onCrontime, onDate]
const methodIndexLookup = { "onWeek": 0, "onIntervalTime": 1, "onTime": 2, "onCrontime": 3, "onDate": 4 }

/**
 * It translates daily expressible recipes on the calendar into crontime expression.
 * Produces a valid crontime expression.
 * In summary:
 *  creates a crontime that will run at regular intervals between two dates;
 *  enter valid crontime expression get crontime expression;
 *  generate crontime of the specific date;
 *  generate crontime of the specific date;
 *  create crontime with various combinations of month, week, weekdays, hours, minutes and tick and generates the cron time for the week the date is in.
 * 
 * @param {Number|String} method Metod index or name. onWeek, onIntervalTime, onTime, onCrontime, onDate
 * @param {Array} args Arguments to metods
 * 
 * @returns {String} Crontime
 * 
 * @summary Produces a valid crontime expression.
 * 
 * @license Apache-2.0
 */
module.exports = function(method, ...args) {
    const methodIndex = typeof method === "number" ? method : methodIndexLookup[method]
    return methods[methodIndex](...args)
}