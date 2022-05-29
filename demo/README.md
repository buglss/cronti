[![en-EN](https://img.shields.io/badge/*EN-English-blue?style=plastic)](README.md)
[![tr-TR](https://img.shields.io/badge/TR-Turkish-red?link=README.tr-TR.md)](README.tr-TR.md)

# Summary

```js
// Include Package
const cronti = require("cronti")

/* Creates a crontime expression that will run at regular intervals between two dates. */
cronti.intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - OR - */
cronti.intervalTime(new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* returns "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Enter valid crontime expression get crontime expression. */
cronti.onCrontime("0 2 * * *")
/* returns "0 2 * * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific date. */
cronti.onDate("2022-05-26T09:30:00.000Z")
/* - OR - */
cronti.onDate(new Date("2022-05-26 12:30"))
/* returns "30 12 26 * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific day of date. */
cronti.onDay("2022-05-26T09:30:00.000Z")
/* - OR - */
cronti.onDay(new Date("2022-05-26 12:30"))
/* returns "30 12 26 5 *" */
/* ************************************************************************ */

/* Create crontime with various combinations of month, week, weekdays, time and tick parameters.  
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
cronti.onTime({month: 4, week: 2})
/* returns "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 4, week: 2, weekDays: 3})
/* returns "30 12 18 5 *" */
/* ---------------------------------------------------- */
cronti.onTime({month: 3, weekDays: 1})
/* returns "30 12 * 4 1" */
/* ************************************************************************ */

/* Generates the cron time for the week the date is in.
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
cronti.onWeek("2022-05-26T09:30:00.000Z")
/* - OR - */
cronti.onWeek(new Date("2022-05-26 12:30"))
/* returns "30 12 22-28 5-5 *" */
/* ************************************************************************ */
```
