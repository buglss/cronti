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

const weeksOfMonth = require("./weeks-of-month")

/**
 * Returns the days of the week of the month.
 * The weeks are referred to as the first(0), second(1), third(2), and last(-1).
 * 
 * @param {Object} options
 * @param {Number} options.month
 * @param {Number} options.week
 * @param {Number} [options.year = new Date().getFullYear()]
 * @param {Number} [options.firstDayOfWeek = 0] It is the first day of the week. For example, Monday(1) in Turkey, Sunday(0) in America
 * 
 * @returns {String[]} List of weekdays of the week of the month
 * 
 * @summary Get day list by week of the month
 * 
 * @example
 * // returns ["1"]
 * weekOfMonth({month: 4, week: 0, year: 2022})
 * 
 * @example
 * // returns ["2", "3", "4", "5", "6", "7", "8"]
 * weekOfMonth({month: 4, week: 1, year: 2022})
 * 
 * @example
 * // returns ["9", "10", "11", "12", "13", "14", "15"]
 * weekOfMonth({month: 4, week: 2, year: 2022})
 * 
 * @example
 * // returns ["30", "31"]
 * weekOfMonth({month: 4, week: -1, year: 2022})
 * 
 * @license Apache-2.0
 */

module.exports = function({ month, week, year = new Date().getFullYear(), firstDayOfWeek = 0 }) {
    if((!month && month !== 0) || (!week && week !== 0)) return

    // To Number
    month = +month
    week = +week

    const isValidMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(month)
    const isValidWeek = [0, 1, 2, -1].includes(week)
    if(!isValidMonth || !isValidWeek) return

    let weeks = weeksOfMonth({ month, year, parse: true, fill: false, firstDayOfWeek })

    // Get Last Week
    if(week === -1) week = weeks.length - 1

    return weeks[week]
}