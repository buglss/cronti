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
 * Returns the difference in seconds between now and the entered date.
 * 
 * @param {Date} date Date value to be difference
 * 
 * @returns {Number} Seconds Difference Value
 * 
 * @summary Get difference of seconds up to today
 * 
 * @license Apache-2.0
 */

module.exports = function(date) {
    if(!date) return

    date = new Date(date)

    if(isNaN(date)) return

    return (date.getTime() - new Date().getTime()) / 1000
}