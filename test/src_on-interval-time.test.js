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
const onIntervalTime = require("../src/on-interval-time")

describe("onIntervalTime", function() {
    it(`onIntervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z") --> "30 12 25-15 4-5 *" --> The crontime will every year, it will start at 12:30 on April 15 and running every days until May 15 at 12:30.`, function() {
        let startDate = new Date("2022-04-25 12:30")
        let endDate = new Date("2022-05-15 12:30")

        // mins hours days months weekdays
        let crontime = "30 12 25-15 4-5 *"
        assert.strictEqual(onIntervalTime(startDate, endDate), crontime)
    })

    it(`onIntervalTime("2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d") --> "30 12 10-20/4 6-7 *" --> The crontime will every year, it will start at 12:30 on June 10 and running every 4 days until July 20 at 12:30.`, function() {
        let startDate = new Date("2022-06-10 12:30")
        let endDate = new Date("2022-07-20 12:30")
        let step = "4d"

        // mins hours days months weekdays
        let crontime = "30 12 10-20/4 6-7 *"
        assert.strictEqual(onIntervalTime(startDate, endDate, step), crontime)
    })

    it(`onIntervalTime("2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h") --> "30 */2 1-5 4-7 *" --> The crontime will every year, it will start at 00:30 on April 1 and running every 2 hours until July 5 at 00:30.`, function() {
        let startDate = new Date("2022-04-01 12:30")
        let endDate = new Date("2022-07-05 12:30")
        let step = "2h"

        // mins hours days months weekdays
        let crontime = "30 */2 1-5 4-7 *"
        assert.strictEqual(onIntervalTime(startDate, endDate, step), crontime)
    })

    it(`onIntervalTime("2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m") --> "*/30 12 1-2 4-4 *" --> The crontime will every year, it will start at 12:30 on April 1 and running every 30 minutes until April 2 at 12:30.`, function() {
        let startDate = new Date("2022-04-01 12:30")
        let endDate = new Date("2022-04-02 12:30")
        let step = "30m"

        // mins hours days months weekdays
        let crontime = "*/30 12 1-2 4-4 *"
        assert.strictEqual(onIntervalTime(startDate, endDate, step), crontime)
    })
})