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
const onCrontime = require("../src/on-crontime")

describe("onCrontime", function() {
    it(`onCrontime("0 2 * * *") --> "0 2 * * *" --> The used value is returned when a valid crontime expression is use.`, function() {
        let crontime = "0 2 * * *"
        assert.strictEqual(onCrontime(crontime), crontime)
    })
    it(`onCrontime("0-30/5 20 * * *") --> "0-30/5 20 * * *" --> The used value is returned when a valid crontime expression is use.`, function() {
        let crontime = "0-30/5 20 * * *"
        assert.strictEqual(onCrontime(crontime), crontime)
    })
})