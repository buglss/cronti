/**
 * @license GPL-3.0
 */

// Include Log Helper Package
const putLog = require("./helper/put-log")

// Include Cronti Package
const cronti = require("cronti")

/* Creates a crontime expression that will run at regular intervals between two dates. */
putLog(`intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z") => ${cronti.intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")}`)
/* returns "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Enter valid crontime expression get crontime expression. */
putLog(`onCrontime("0 2 * * *") => ${cronti.onCrontime("0 2 * * *")}`)
/* returns "0 2 * * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific date. */
putLog(`onDate("2022-05-26T09:30:00.000Z") => ${cronti.onDate("2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 26 * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific day of date. */
putLog(`onDay("2022-05-26T09:30:00.000Z") => ${cronti.onDay("2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 26 5 *" */
/* ************************************************************************ */

/* Create crontime with various combinations of month, week, weekdays, time and tick parameters.  
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
putLog(`onTime({ month: 4, week: 2 }) => ${cronti.onTime({ month: 4, week: 2 })}`)
/* returns "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
putLog(`onTime({ month: 4, week: 2, weekDays: 3 }) => ${cronti.onTime({ month: 4, week: 2, weekDays: 3 })}`)
/* returns "30 12 18 5 *" */
/* ---------------------------------------------------- */
putLog(`onTime({ month: 3, weekDays: 1 }) => ${cronti.onTime({ month: 3, weekDays: 1 })}`)
/* returns "30 12 * 4 1" */
/* ************************************************************************ */

/* Generates the cron time for the week the date is in.
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
putLog(`onWeek("2022-05-26T09:30:00.000Z") => ${cronti.onWeek("2022-05-26T09:30:00.000Z")}`)
/* returns "30 12 22-28 5-5 *" */
/* ************************************************************************ */

/* For now it's end */