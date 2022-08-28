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
 * Checks if the crontime expression is true.
 * Returns true if valid or false if invalid.
 * 
 * @param {String} expression Crontime expression
 * 
 * @returns {Boolean} Crontime expression validation result
 * 
 * @summary Check crontime expression
 * 
 * @example
 * // returns true
 * isValidCronExpression(40,46,10 11,1,1 28,1,26 10,7,2 3,2,1)
 * 
 * @example
 * // returns true
 * isValidCronExpression(46-58 11-12 12-27 11-7 3-4)
 * 
 * @example
 * // returns true
 * isValidCronExpression(* * * * *)
 * 
 * @example
 * // returns true
 * isValidCronExpression(15/39 16/1 13/1 12/3 1/1)
 * 
 * @example
 * // returns true
 * isValidCronExpression(34 8 29 1 5)
 * 
 * @license Apache-2.0
 */

module.exports = function(expression) {
    if(expression && expression.split) {
        const sections = expression.split(" ")

        // mins, hours, days, months, weekdays
        if(sections.length !== 5) return false

        // [mins, hours, days, months, weekdays]
        const maxValues = [59, 23, 31, 12, 6]

        if(sections.every((sec, i) => {
            if(sec === "*") return true
            if(sec.includes("/")) {
                let secOpts = sec.split("/")
                if(secOpts[0].includes("-")) {
                    let sec = secOpts[0]
                    if(sec.includes(",")) return false
                    else {
                        let secOpts = sec.split("-")
                        if(!secOpts.every(secOpt => {
                            return +secOpt >= 0 && +secOpt <= maxValues[i]
                        })) return false
                    }
                    if(!(+secOpts[1] >= 0 && +secOpts[1] <= maxValues[i])) return false
                    return true
                }
                if(secOpts[0] !== "*" && !secOpts.every(secOpt => {
                    return +secOpt >= 0 && +secOpt <= maxValues[i]
                })) return false
                else if((secOpts[0] === "*" && +secOpts[1] >= 0 && +secOpts[1] <= maxValues[i]) || secOpts.every(secOpt => {
                    return +secOpt >= 0 && +secOpt <= maxValues[i]
                })) return true
                return false
            } else if(sec.includes("-")) {
                if(sec.includes(",")) {
                    let secOpts = sec.split(",")
                    let values = secOpts.filter(secOpt => !secOpt.includes("-"))
                    let timegap = secOpts.filter(secOpt => secOpt.includes("-")).join("-").split("-")
                    if(![...values, ...timegap].every(combine => {
                        return +combine >= 0 && +combine <= maxValues[i]
                    })) return false
                    return true
                } else {
                    let secOpts = sec.split("-")
                    if(!secOpts.every(secOpt => {
                        return +secOpt >= 0 && +secOpt <= maxValues[i]
                    })) return false
                    return true
                }
            } else if(sec.includes(",")) {
                let secOpts = sec.split(",")
                if(!secOpts.every(secOpt => {
                    return +secOpt >= 0 && +secOpt <= maxValues[i]
                })) return false
                return true
            } else if(+sec >= 0 && +sec <= maxValues[i]) return true
            return false
        })) return true
    }
    return false
}