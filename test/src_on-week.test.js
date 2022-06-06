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
const onWeek = require("../src/on-week")

/***************************************************************************************************************************
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 **************************************************************************************************************************/

describe("onWeek", function() {
    it(`onWeek("2022-05-26T09:30:00.000Z") --> "30 12 22-28 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will be repeated annually.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z"), "30 12 22-28 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", 2) --> "30 12 20-28 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will repeat annually. But the start date is 2 days ago.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", 2), "30 12 20-28 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", "0FD") --> "30 12 21-27 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will be repeated annually.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", "0FD"), "30 12 21-27 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", 2, "0FD") --> "30 12 19-27 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will repeat annually. But the start date is 2 days ago.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", 2, "0FD"), "30 12 19-27 5-5 *")
    })
})