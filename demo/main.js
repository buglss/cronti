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
 * @license Apache-2.0
 */

// Include Log Helper Package
const putLog = require("./helper/put-log")

// Include Cronti Package
const cronti = require("cronti")

/* Creates a crontime expression that will run at regular intervals between two dates. */
putLog(`cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z") => ${cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")}`)
/* returns "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Enter valid crontime expression get crontime expression. */
putLog(`cronti("onCrontime", "0 2 * * *") => ${cronti("onCrontime", "0 2 * * *")}`)
/* returns "0 2 * * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific date. */
putLog(`cronti("onDate", "2022-05-26T09:30:00.000Z") => ${cronti("onDate", "2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 26 * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific day of date. */
putLog(`cronti("onDay", "2022-05-26T09:30:00.000Z") => ${cronti("onDay", "2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 26 5 *" */
/* ************************************************************************ */

/* Create crontime with various combinations of month, week, weekdays, time and tick parameters.  
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
putLog(`cronti("onTime", "4M", "2W") => ${cronti("onTime", "4M", "2W")}`)
/* returns "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
putLog(`cronti("onTime", "4M", "2W", "3WD") => ${cronti("onTime", "4M", "2W", "3WD")}`)
/* returns "30 12 18 5 *" */
/* ---------------------------------------------------- */
putLog(`cronti("onTime", "3M", "1WD") => ${cronti("onTime", "3M", "1WD")}`)
/* returns "30 12 * 4 1" */
/* ************************************************************************ */

/* Generates the cron time for the week the date is in.
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
putLog(`cronti("onWeek", "2022-05-26T09:30:00.000Z") => ${cronti("onWeek", "2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 22-28 5-5 *" */
/* ************************************************************************ */

/* For now it's end */