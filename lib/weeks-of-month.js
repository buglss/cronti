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

const dayOfWeek = require("./day-of-week")

/**
 * Parses a day list with start and end values
 * 
 * @param  {Array.<{start: Number, end: Number}>} [weeks=[]] Week list with start and end values
 * @param  {Boolean} [fill=true] Makes each item of the week list have 7 items
 * 
 * @returns {Array.<Array.<String>>}
 * 
 * @summary Helper
 * 
 * @license Apache-2.0
 */

function weeksParse(weeks = [], fill = true) {
    let parsedWeeks = weeks.map((x, i, arr) => {
        let list = []

        x.start = +x.start
        x.end = +x.end

        while(x.start <= x.end) {
            list.push(x.start + "")
            x.start++
        }

        if(fill) {
            if(i === 0) list = ["0", "0", "0", "0", "0", "0", "0", ...list].slice(-7)
            else if(i === arr.length - 1) list = [...list, "00", "00", "00", "00", "00", "00", "00"].slice(0, 7)
        }

        return list
    })

    return parsedWeeks.filter(x => x.length)
}

/**
 * Returns the weeks of month.
 * 
 * @param {Object} options Options
 * @param {Number} [options.firstDayOfWeek = 1] It is the first day of the week. For example, Monday(1) in Turkey, Sunday(0) in America
 * @param {Number} options.month The month to use for the week list
 * @param {Number} [options.year = new Date().getFullYear()] The year to use for the week list
 * @param {Boolean} [options.parse = false] Parses a day list with start and end values
 * @param {Boolean} [options.fill = true] Makes each item of the week list have 7 items
 * 
 * @returns {Array.<Array.<String>|Array.<{start: Number, end: Number}>>}
 * 
 * @summary Get week list by month
 * 
 * @example
 * // returns [
 * //     { start: 1, end: 1 },
 * //     { start: 2, end: 8 },
 * //     { start: 9, end: 15 },
 * //     { start: 16, end: 22 },
 * //     { start: 23, end: 29 },
 * //     { start: 30, end: 31 }
 * // ]
 * weeksOfMonth({month: 4, year: 2022})
 * 
 * @example
 * // returns [
 * //      ["1"],
 * //      ["2", "3", "4", "5", "6", "7", "8"],
 * //      ["9", "10", "11", "12", "13", "14", "15"],
 * //      ["16", "17", "18", "19", "20", "21", "22"],
 * //      ["23", "24", "25", "26", "27", "28", "29"],
 * //      ["30", "31"]
 * // ]
 * weeksOfMonth({month: 4, year: 2022, parse: true, fill: false})
 * 
 * @example
 * // returns [
 * //      ["0", "0", "0", "0", "0", "0", "1"],
 * //      ["2", "3", "4", "5", "6", "7", "8"],
 * //      ["9", "10", "11", "12", "13", "14", "15"],
 * //      ["16", "17", "18", "19", "20", "21", "22"],
 * //      ["23", "24", "25", "26", "27", "28", "29"],
 * //      ["30", "31", "00", "00", "00", "00", "00"]
 * // ]
 * weeksOfMonth({month: 4, year: 2022, parse: true})
 * 
 * @license Apache-2.0
 */

module.exports = function({ firstDayOfWeek = 1, month, year = new Date().getFullYear(), parse = false, fill = true }) {
    if(!month && month !== 0) return

    month = Number(month)

    const isValidMonth = !!~[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].indexOf(month)
    if(!isValidMonth) return

    let weeks = []
    let startDay = dayOfWeek(new Date(year, month, 1), { firstDayOfWeek })
    let lastDate = new Date(year, month + 1, 0).getDate() // Last date of this month. The zeroth day of the next month.
    let startDate = 1 // First date of month. Every month starts with 1
    let endDate = 7 - startDay

    while(startDate <= lastDate) {
        weeks.push({ start: startDate, end: endDate })
        startDate = endDate + 1
        endDate += 7
        if(endDate > lastDate) endDate = lastDate
    }

    return parse ? weeksParse(weeks, fill) : weeks
}