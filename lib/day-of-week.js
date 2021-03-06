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
 * Returns the day of week
 * 
 * @param {Date} date Find out the day of the week for this date.
 * @param {Object} options Options
 * @param {Number} [options.firstDayOfWeek = 0] It is the first day of the week. For example, Monday(1) in Turkey, Sunday(0) in America
 * 
 * @returns {Number} Day value. Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
 * 
 * @summary Get day
 * 
 * @example
 * // Default Days: Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
 * // Days for Turkey: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
 * // Returns 1
 * dayOfWeek(new Date("2022-05-24"), { firstDayOfWeek: 1 })
 * 
 * @example
 * // Default Days: Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
 * // Returns 2
 * dayOfWeek(new Date("2022-05-24"))
 * 
 * @license Apache-2.0
 */

module.exports = function(date, options = { firstDayOfWeek: 0 }) {
    const { firstDayOfWeek } = options
    const isValidDay = [0, 1, 2, 3, 4, 5, 6].includes(Number(firstDayOfWeek))
    if(!isValidDay || !date) return

    date = new Date(date)

    if(isNaN(date)) return

    return ~((firstDayOfWeek - date.getDay() - 7) % 7) + 1
}