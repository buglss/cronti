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
const dayOfWeek = require("../lib/day-of-week")

describe("dayOfWeek", function() {
    it(`dayOfWeek(new Date("2022-05-24"), { firstDayOfWeek: 1 }) --> 1 --> Returns the day of the week on May 24, 2022 according to the Turkish calendar.`, function() {
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const date = new Date("2022-05-24")
        const out = 1
        assert.strictEqual(dayOfWeek(date, { firstDayOfWeek: 1 }), out)
    })

    it(`dayOfWeek(new Date("2022-05-24")) --> 2 --> Returns the day of the week on May 24, 2022 according to the American calendar.`, function() {
        // Days: Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
        const date = new Date("2022-05-24")
        const out = 2
        assert.strictEqual(dayOfWeek(date), out)
    })
})