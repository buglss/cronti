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
const onDate = require("../src/on-date")

describe("onDate", function() {
    it(`onDate("2022-05-26T09:30:00.000Z") --> "30 12 26 * *" --> Returns the crontime at 12:30 on the 26th of the month, which will repeat every month and every year.`, function() {
        assert.strictEqual(onDate("2022-05-26T09:30:00.000Z"), "30 12 26 * *")
    })

    it(`onDate("2022-05-26T09:30:00.000Z", 2) --> "30 12 24 * *" --> Returns the crontime at 12:30 on the 24th of the month, which will repeat every month and every year.`, function() {
        assert.strictEqual(onDate("2022-05-26T09:30:00.000Z", 2), "30 12 24 * *")
    })

    it(`onDate("2022-05-26T09:30:00.000Z", true) --> "30 12 26 5 *" --> Returns the crontime on May 26, 2022 at 12:30, which will be repeated every year.`, function() {
        assert.strictEqual(onDate("2022-05-26T09:30:00.000Z", true), "30 12 26 5 *")
    })

    it(`onDate("2022-05-26T09:30:00.000Z", 2, true) --> "30 12 24 5 *" --> Returns the crontime on May 24, 2022 at 12:30, which will be repeated every year.`, function() {
        assert.strictEqual(onDate("2022-05-26T09:30:00.000Z", 2, true), "30 12 24 5 *")
    })
})