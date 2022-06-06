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

/**
 * It allows you to log styled. It increases readability.
 * 
 * @param {String} text The text of the console
 * 
 * @returns {Boolean} Operation result
 * 
 * @summary Logs to console
 * 
 * @license Apache-2.0
 */

module.exports = function(text) {
    if(!text) return false

    let timestamp = new Date().toISOString()

    console.log()
    console.log(`############################ ${timestamp} ############################`)
    console.log("#", text)
    console.log(`##################################################################################`)
    console.log()

    return true
}