[![en-EN](https://img.shields.io/badge/*EN-English-blue?style=plastic)](README.md)
[![tr-TR](https://img.shields.io/badge/TR-Turkish-red?link=README.tr-TR.md)](README.tr-TR.md)

![nodejs](https://img.shields.io/badge/nodejs-43853d?logo=nodedotjs&labelColor=fff)
![npm](https://img.shields.io/badge/npm-bc2c32?logo=npm&labelColor=fff)
![javascript](https://img.shields.io/badge/javascript-e9d961?logo=javascript&labelColor=000)
![mocha](https://img.shields.io/badge/mocha-8d6849?logo=mocha&labelColor=fff)
[![License](https://img.shields.io/badge/License-Apache--2.0-red)](LICENSE)
[![vulnerabilities](https://snyk.io/test/github/buglss/cronti/badge.svg)](https://snyk.io/test/github/buglss/cronti/)

[![NPM](https://nodei.co/npm/cronti.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cronti/)

# Introduction

You need to know crontime expression to do scheduled jobs. However, this package saves you this trouble. You can create crontime expressions with timing expressions used in daily life. You can use this generated crontime expression to create a scheduled job. A valid crontime expression is returned.

You can use it with any cronjob package or directly with the crontab command sets provided by the operating systems. It can work with even the most primitive instruction sets. Because this package directly returns the crontime expression.

You can easily present an interface when creating scheduled and calendar works in your projects. It offers functions where people can make plans in the language they use in daily life.

![Crontime_Trouble](./assets/crontime_trouble.png)

# Install

Using npm:

```bash
npm i cronti # Locale Install. For use in spesific project.
npm i -g cronti # Global Install. For use in general projects.
```

Note: add `--save` if you are using npm < 5.0.0

# Quick Start

In Demo:

[Demo project download (zip)](demo/publish/demo.zip?raw=true). Extract the project files from zip. Go to project directory. Execute ``index.js`` file by **nodejs**.

```bash
unzip demo.zip
cd demo
npm i
npm run demo
```

In NodeJs:

```js
// Include Package
const cronti = require("cronti")

/* Creates a crontime expression that will run at regular intervals between two dates. */
cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - OR - */
cronti("onIntervalTime", new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* - OR - */
cronti(1, "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - OR - */
cronti(1, new Date("2022-04-25 12:30"), new Date("2022-05-15 12:30"))
/* return "30 12 25-15 4-5 *" */
/* ************************************************************************ */

/* Enter valid crontime expression get crontime expression. */
cronti("onCrontime", "0 2 * * *")
/* - OR - */
cronti(3, "0 2 * * *")
/* return "0 2 * * *" */
/* ************************************************************************ */

/* Generate crontime expression of the spesific date. */
cronti("onDate", "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti("onDate", new Date("2022-05-26 12:30"))
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti(4, new Date("2022-05-26 12:30"))
/* return "30 12 26 * *" */
/* ---------------------------------------------------- */
cronti("onDate", "2022-05-26T09:30:00.000Z", true)
/* - OR - */
cronti("onDate", new Date("2022-05-26 12:30"), true)
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z", true)
/* - OR - */
cronti(4, new Date("2022-05-26 12:30"), true)
/* return "30 12 26 5 *" */
/* ************************************************************************ */

/* Create crontime with various combinations of month, week, weekdays, time and tick parameters.  
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
/* - First day of week is Monday - */
cronti("onTime", "4M", "2W")
/* - OR - */
cronti(2, "4M", "2W")
/* return "30 12 15-21 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "4M", "2W", "3WD")
/* - OR - */
cronti(2, "4M", "2W", "3WD")
/* return "30 12 18 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "3M", "1WD")
/* - OR - */
cronti(2, "3M", "1WD")
/* return "30 12 * 4 1" */
/* ---------------------------------------------------- */
/* - First day of week is Sunday - */
cronti("onTime", "0FD", "4M", "2W")
/* - OR - */
cronti(2, "0FD", "4M", "2W")
/* return "30 12 14-20 5-5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "0FD", "4M", "2W", "3WD")
/* - OR - */
cronti(2, "0FD", "4M", "2W", "3WD")
/* return "30 12 17 5 *" */
/* ---------------------------------------------------- */
cronti("onTime", "0FD", "3M", "1WD")
/* - OR - */
cronti(2, "0FD", "3M", "1WD")
/* return "30 12 * 4 1" */
/* ************************************************************************ */

/* Generates the cron time for the week the date is in.
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
*/
/* - First day of week is Monday - */
cronti("onWeek", "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti("onWeek", new Date("2022-05-26 12:30"))
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti(0, new Date("2022-05-26 12:30"))
/* return "30 12 22-28 5-5 *" */
/* ---------------------------------------------------- */
/* - First day of week is Sunday - */
cronti("onWeek", "2022-05-26T09:30:00.000Z", "0FD")
/* - OR - */
cronti("onWeek", new Date("2022-05-26 12:30"), "0FD")
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z", "0FD")
/* - OR - */
cronti(0, new Date("2022-05-26 12:30"), "0FD")
/* return "30 12 21-27 5-5 *" */
/* ************************************************************************ */

/* Get helper functions in cronti package. */
cronti("HELPERS")
/* - OR - */
cronti(-1)
/* return {...} */
/* ************************************************************************ */
```

# Documentation

- [Documentation](#documentation)
  - [onWeek](#onweek)
      - [Input](#input)
      - [Output](#output)
      - [Example](#example)
  - [onIntervalTime](#onintervaltime)
      - [Input](#input-1)
      - [Output](#output-1)
      - [Example](#example-1)
  - [onTime](#ontime)
      - [Input](#input-2)
      - [Output](#output-2)
      - [Example](#example-2)
  - [onCrontime](#oncrontime)
      - [Input](#input-3)
      - [Output](#output-3)
      - [Example](#example-3)
  - [onDate](#ondate)
      - [Input](#input-4)
      - [Output](#output-4)
      - [Example](#example-4)

The ``cronti`` function takes the method name or index value in the first parameter. Then unlimited parameters can be added. Parameters sent according to the function of the called method are used.

cronti(<methodName(string)|methodIndex(number)>, <...args>)

|    Methods     | Index |      Name      |                                         Description                                         |
| :------------: | :---: | :------------: | :-----------------------------------------------------------------------------------------: |
|     onWeek     |   0   |     onWeek     |                     Generates the cron time for the week the date is in                     |
| onIntervalTime |   1   | onIntervalTime |           Creates a crontime that will run at regular intervals between two dates           |
|     onTime     |   2   |     onTime     | Create crontime with various combinations of month, week, weekdays, hours, minutes and tick |
|   onCrontime   |   3   |   onCrontime   |                   Enter valid crontime expression get crontime expression                   |
|     onDate     |   4   |     onDate     |                           Generate crontime of the spesific date                            |
|     HELPERS    |   -1  |     HELPERS    |                           Get helper functions in cronti package                            |

## onWeek

The crontime expression that will be triggered every day of the week that the entered date is in returns.
The crontime expression that will be triggered before the entered date based on the tick value is returned.

A valid date value must be sent as a parameter. Any numeric value can be used for the tick value.

#### Input

|        Parameter        |  Type  | Required |                                              Description                                              |
| :---------------------: | :----: | :------: | :---------------------------------------------------------------------------------------------------: |
|      args.\<date\>      |  Date  |   true   |                               Date of the week for crontime expression                                |
|      args.\<tick\>      | Number |  false   |                             The number of days to subtract from the date                              |
| args.\<firstDayOfWeek\> | String |  false   | First day of week. It takes values between 0 and 6. It takes value <digit>FD. Default value is monday |

#### Output

|  Type  |     Description     |
| :----: | :-----------------: |
| String | Crontime expression |

#### Example

```js
const cronti = require("cronti")

cronti("onWeek", "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z")
// => "30 12 22-28 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", 2)
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z", 2)
// => "30 12 20-28 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", "0FD")
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z", "0FD")
// => "30 12 21-27 5-5 *"

cronti("onWeek", "2022-05-26T09:30:00.000Z", 2, "0FD")
/* - OR - */
cronti(0, "2022-05-26T09:30:00.000Z", 2, "0FD")
// => "30 12 19-27 5-5 *"
```

## onIntervalTime

Creates crontime expression based on start and end date. According to step parameter, it is specified in which intervals it will work between two dates. The step parameter is used in days, hours or minutes.

There should be 2 date values in the parameters. The order of these dates is not important. The smaller startDate will be used as the larger endDate. For the step parameter, you can use a string value suitable for the pattern.

#### Input

|     Parameter      |          Type           | Required |           Description           |
| :----------------: | :---------------------: | :------: | :-----------------------------: |
| args.\<startDate\> |          Date           |   true   |         Cron start date         |
|  args.\<endDate\>  |          Date           |   true   |          Cron end date          |
|    args.\<step>    | String <.d \| .h \| .m> |  false   | Specifies at what steps to run. |

#### Output

|  Type  |     Description     |
| :----: | :-----------------: |
| String | Crontime expression |

#### Example

```js
const cronti = require("cronti")

cronti("onIntervalTime", "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
/* - OR - */
cronti(1, "2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z")
// => "30 12 25-15 4-5 *"

cronti("onIntervalTime", "2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
/* - OR - */
cronti(1, "2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d")
// => "30 12 10-20/4 6-7 *"

cronti("onIntervalTime", "2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
/* - OR - */
cronti(1, "2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h")
// => "30 */2 1-5 4-7 *"

cronti("onIntervalTime", "2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
/* - OR - */
cronti(1, "2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m")
// => "*/30 12 1-2 4-4 *"
```

## onTime

Create crontime with various combinations of month, week, weekdays, time and tick parameters. Only time is a mandatory value. All crontime expressions are set according to this time parameter.
The crontime expression that will be triggered before the entered date according to the tick value is returned.

- If only the month(0..11) and week(0,1,2,-1) parameter is filled, the crontime expression that will be triggered every day from the first day of the week to the last day of that week is returned.
- If only the month(0..11), week(0,1,2,-1) and weekdays(0..6) parameters are populated, the crontime expression for that weekday is returned.
- If only the week(0,1,2,-1) parameter is populated, the crontime expression that will be triggered every day during that week is returned. Except for the last week of the month(-1).
- If only the month(0..11) parameter is populated, the crontime expression is returned for each day in that month.
- If only the weekdays(0..6) parameter is populated, the crontime expression is returned for this weekday every month.
- If only the month(0..11) and weekdays(0..6) parameters are populated, the crontime expression is returned for these weekdays of this month.
- If no parameters are filled in, the crontime expression is returned for each day of each month.

A parameter can be sent with a valid month, week, weekdays value. Time parameter can be sent in accordance with the pattern. Any numeric value can be used for the tick value.

#### Input

|        Parameter        |      Type       | Required |                                              Description                                              |
| :---------------------: | :-------------: | :------: | :---------------------------------------------------------------------------------------------------: |
|     args.\<month\>      |  String <..M>   |  false   |       Month for crontime expression. It takes values between 0 and 11. It takes value <digit>M        |
|      args.\<week\>      |  String <..W>   |  false   |        Week for crontime expression. It takes values 0, 1, 2 and -1. It takes value <digit>W.         |
|    args.\<weekDays\>    |  String <..WD>  |  false   |     Weekdays for crontime expression. It takes values between 0 and 6. It takes value <digit>WD.      |
|      args.\<time\>      | String <dd\:mm> |  false   |                                  Time(dd:mm) for crontime expression                                  |
|      args.\<tick\>      |     Number      |  false   |       The number of days to subtract from the date. Month and week required parameters for tick       |
| args.\<firstDayOfWeek\> |     String      |  false   | First day of week. It takes values between 0 and 6. It takes value <digit>FD. Default value is monday |

#### Output

|  Type  |     Description     |
| :----: | :-----------------: |
| String | Crontime expression |

#### Example

```js
const cronti = require("cronti")

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "4M", "2W")
/* - OR - */
cronti(2, "4M", "2W")
// => "30 12 15-21 5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "4M", "2W", "3WD")
/* - OR - */
cronti(2, "4M", "2W", "3WD")
// => "30 12 18 5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0W")
/* - OR - */
cronti(2, "0W")
// => "30 12 1-7 * *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "2M")
/* - OR - */
cronti(2, "2M")
// => "30 12 * 3 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "6WD")
/* - OR - */
cronti(2, "6WD")
// => "30 12 * * 6"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "3M", "1WD")
/* - OR - */
cronti(2, "3M", "1WD")
// => "30 12 * 4 1"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime")
/* - OR - */
cronti(2)
// => "30 12 * * *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "4M", "2W", 1)
/* - OR - */
cronti(2, "4M", "2W", 1)
// => "30 12 14-21 5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "2M", "09:45")
/* - OR - */
cronti(2, "2M", "09:45")
// => "45 09 * 3 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "4M", "2W")
/* - OR - */
cronti(2, "0FD", "4M", "2W")
// => "30 12 14-20 5-5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "4M", "2W", "3WD")
/* - OR - */
cronti(2, "0FD", "4M", "2W", "3WD")
// => "30 12 17 5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "0W")
/* - OR - */
cronti(2, "0FD", "0W")
// => "30 12 1-7 * *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "2M")
/* - OR - */
cronti(2, "0FD", "2M")
// => "30 12 * 3 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "6WD")
/* - OR - */
cronti(2, "0FD", "6WD")
// => "30 12 * * 6"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "3M", "1WD")
/* - OR - */
cronti(2, "0FD", "3M", "1WD")
// => "30 12 * 4 1"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD")
/* - OR - */
cronti(2, "0FD")
// => "30 12 * * *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "4M", "2W", 1)
/* - OR - */
cronti(2, "0FD", "4M", "2W", 1)
// => "30 12 13-20 5-5 *"

// ! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
cronti("onTime", "0FD", "2M", "09:45")
/* - OR - */
cronti(2, "0FD", "2M", "09:45")
// => "45 09 * 3 *"
```

## onCrontime

Returns the crontime expression of the valid crontime expression. Returns undefined if invalid crontime expression.

Any crontime expression can be used in the parameters.

#### Input

|     Parameter     |  Type  | Required |     Description     |
| :---------------: | :----: | :------: | :-----------------: |
| args.\<crontime\> | String |   true   | Crontime expression |

#### Output

|  Type  |     Description     |
| :----: | :-----------------: |
| String | Crontime expression |

#### Example

```js
const cronti = require("cronti")

cronti("onCrontime", "0 2 * * *")
/* - OR - */
cronti(3, "0 2 * * *")
// => "0 2 * * *"
```

## onDate

Returns the crontime expression of the entered date value.
The crontime expression is returned every month or just the month of the date and repeat every year.
The crontime expression that will be triggered before the entered date based on the tick value is returned.

A valid date value must be sent as a parameter.

#### Input

|       Parameter        |  Type   | Required |                 Description                  |
| :--------------------: | :-----: | :------: | :------------------------------------------: |
|     args.\<date\>      |  Date   |   true   |      Used date for crontime expression       |
|     args.\<tick\>      | Number  |  false   | The number of days to subtract from the date |
| args.\<isMonthOfDate\> | Boolean |  false   |        Execute only in month of date         |

#### Output

|  Type  |     Description     |
| :----: | :-----------------: |
| String | Crontime expression |

#### Example

```js
const cronti = require("cronti")

cronti("onDate", "2022-05-26T09:30:00.000Z")
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z")
// => "30 12 26 * *"

cronti("onDate", "2022-05-26T09:30:00.000Z", 2)
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z", 2)
// => "30 12 24 * *"

cronti("onDate", "2022-05-26T09:30:00.000Z", true)
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z", true)
// => "30 12 26 5 *"

cronti("onDate", "2022-05-26T09:30:00.000Z", 2, true)
/* - OR - */
cronti(4, "2022-05-26T09:30:00.000Z", 2, true)
// => "30 12 24 5 *"
```

# Authors

It is maintained by:

- Levent Sencer Şahin : [LinkedIn:@buglss](https://www.linkedin.com/in/buglss/) | [Blog:@buglss](https://buglss.github.io/) | [Facebook:@buglss](https://www.facebook.com/buglss) | [Twitter:@buglss](https://twitter.com/buglss) | [Instagram:@buglss](https://www.instagram.com/buglss)

# Copyright And License

Copyright Levent Sencer Şahin and other contributors, under [the Apache-2.0](LICENSE).
