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

const isValidCronExpression = require("../lib/is-valid-cron-expression")

/**
 * Returns the crontime of the valid crontime expression.
 * Returns undefined if invalid crontime expression.
 * 
 * @param {Array} args Crontime
 * @param {String} args.crontime Valid crontime expression
 * 
 * @returns {String} Crontime
 * 
 * @summary Enter valid crontime expression get crontime expression.
 * 
 * @example
 * // returns "0 2 * * *"
 * onCrontime("0 2 * * *")
 * 
 * @license Apache-2.0
 */

module.exports = function(...args) {
    let crontime
    for(let arg of args) {
        if(!crontime && typeof arg === "string" && isValidCronExpression(arg)) crontime = arg;
        if(crontime) break;
    }

    if(!crontime) return ""

    return crontime
}