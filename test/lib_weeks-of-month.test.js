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
const weeksOfMonth = require("../lib/weeks-of-month")

describe("weeksOfMonth", function() {
    it(`weeksOfMonth({month: 4, year: 2022}) --> returns [
        { start: 1, end: 1 },
        { start: 2, end: 8 },
        { start: 9, end: 15 },
        { start: 16, end: 22 },
        { start: 23, end: 29 },
        { start: 30, end: 31 }
    ] --> Returns the start-end of the weeks of May 2022.`, function() {
        const options = {
            month: 4,
            year: 2022
        }
        const out = [
            { start: 1, end: 1 },
            { start: 2, end: 8 },
            { start: 9, end: 15 },
            { start: 16, end: 22 },
            { start: 23, end: 29 },
            { start: 30, end: 31 }
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })

    it(`weeksOfMonth({month: 4, year: 2022, parse: true, fill: false}) --> returns [
        ["1"],
        ["2", "3", "4", "5", "6", "7", "8"],
        ["9", "10", "11", "12", "13", "14", "15"],
        ["16", "17", "18", "19", "20", "21", "22"],
        ["23", "24", "25", "26", "27", "28", "29"],
        ["30", "31"]
    ] --> Returns the weeks of May 2022 as datasets.`, function() {
        const options = {
            month: 4,
            year: 2022,
            parse: true,
            fill: false
        }
        const out = [
            ["1"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["9", "10", "11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20", "21", "22"],
            ["23", "24", "25", "26", "27", "28", "29"],
            ["30", "31"]
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })

    it(`weeksOfMonth({month: 4, year: 2022, parse: true}) --> returns [
        ["0", "0", "0", "0", "0", "0", "1"],
        ["2", "3", "4", "5", "6", "7", "8"],
        ["9", "10", "11", "12", "13", "14", "15"],
        ["16", "17", "18", "19", "20", "21", "22"],
        ["23", "24", "25", "26", "27", "28", "29"],
        ["30", "31", "00", "00", "00", "00", "00"]
    ] --> Returns datasets for the weeks of May 2022 to complete exactly 7 days.`, function() {
        const options = {
            month: 4,
            year: 2022,
            parse: true
        }
        const out = [
            ["0", "0", "0", "0", "0", "0", "1"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["9", "10", "11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20", "21", "22"],
            ["23", "24", "25", "26", "27", "28", "29"],
            ["30", "31", "00", "00", "00", "00", "00"]
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })
})