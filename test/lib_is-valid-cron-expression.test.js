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
const isValidCronExpression = require("../lib/is-valid-cron-expression")

function random(min, max, options = { toString: true }) {
    return Math.floor(min + Math.random() * (max - min + 1)) + (options.toString ? "" : 0)
}

describe("isValidCronExpression", function() {
    const chars = [",", "-", "*", "/"]
    const dataset = ["*/1 22 16-16 6-6 *", "0-30/55 20 * * *"].concat([...new Array(5)].map((d, i) => {
        let char = chars[i]
        let mins = "", hours = "", days = "", months = "", weekdays = ""
        switch(true) {
            case char === ",":
                mins = random(0, 59) + "," + random(0, 59) + "," + random(0, 59)
                hours = random(0, 23) + "," + random(0, 23) + "," + random(0, 23)
                days = random(1, 31) + "," + random(1, 31) + "," + random(1, 31)
                months = random(1, 12) + "," + random(1, 12) + "," + random(1, 12)
                weekdays = random(0, 6) + "," + random(0, 6) + "," + random(0, 6)
                break;
            case char === "-":
                mins = random(0, 59) + "-" + random(0, 59)
                hours = random(0, 23) + "-" + random(0, 23)
                days = random(1, 31) + "-" + random(1, 31)
                months = random(1, 12) + "-" + random(1, 12)
                weekdays = random(0, 6) + "-" + random(0, 6)
                break;
            case char === "*":
                mins = "*"
                hours = "*"
                days = "*"
                months = "*"
                weekdays = "*"
                break;
            case char === "/":
                mins = random(0, 59) + "/" + random(1, 45)
                hours = random(0, 23) + "/" + random(1, 4)
                days = random(1, 31) + "/" + random(1, 7)
                months = random(1, 12) + "/" + random(1, 3)
                weekdays = random(0, 6) + "/" + random(1, 2)
                break;

            default:
                mins = random(0, 59)
                hours = random(0, 23)
                days = random(1, 31)
                months = random(1, 12)
                weekdays = random(0, 6)
                break;
        }
        return `${mins} ${hours} ${days} ${months} ${weekdays}`
    }))

    dataset.forEach(crontime => {
        it(`isValidCronExpression(${crontime}) --> true --> Returns true.`, function() {
            assert.strictEqual(isValidCronExpression(crontime), true)
        })
    })
})