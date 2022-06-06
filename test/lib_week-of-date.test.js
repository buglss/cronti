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

/*
 * @license Apache-2.0
 */

const assert = require("assert")
const weekOfDate = require("../lib/week-of-date")

describe("weekOfDate", function() {
    it(`weekOfDate("2022-05-24T00:00:00.000Z") --> returns {
        week: ["23", "24", "25", "26", "27", "28", "29"],
        weeks: [
            ["1"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["9", "10", "11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20", "21", "22"],
            ["23", "24", "25", "26", "27", "28", "29"],
            ["30", "31"]
        ],
        total: 6,
        index: 4
    } --> Returns the week object of the date May 24, 2022.`, function() {
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const date = new Date("2022-05-24")
        const out = {
            week: ["23", "24", "25", "26", "27", "28", "29"],
            weeks: [
                ["1"],
                ["2", "3", "4", "5", "6", "7", "8"],
                ["9", "10", "11", "12", "13", "14", "15"],
                ["16", "17", "18", "19", "20", "21", "22"],
                ["23", "24", "25", "26", "27", "28", "29"],
                ["30", "31"]
            ],
            total: 6,
            index: 4
        }
        assert.deepStrictEqual(weekOfDate(date), out)
    })
})