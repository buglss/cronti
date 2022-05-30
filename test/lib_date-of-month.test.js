/*
 * @license GPL-3.0
 */

const assert = require("assert")
const dateOfMonth = require("../lib/date-of-month")

describe("dateOfMonth", function() {
    it(`dateOfMonth({month: 4, week: 0, weekDays: 2, year: 2022}) --> "2022-05-04T09:30:00.000Z" --> Returns the date of 12:30 on the Wednesday of the first week of May 2022.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 4,
            week: 0,
            weekDays: 2,
            year: 2022
        }
        const out = new Date("2022-05-04 12:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it(`dateOfMonth({month: 3, week: 1, weekDays: 4, year: 2022}) --> "2022-04-08T09:30:00.000Z" --> Returns the date of 12:30 on the Friday of the second week of April 2022.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 3,
            week: 1,
            weekDays: 4,
            year: 2022
        }
        const out = new Date("2022-04-08 12:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it(`dateOfMonth({month: 4, week: 2, weekDays: 1, year: 2022, time: "15:45"}) --> "2022-05-10T12:45:00.000Z" --> Returns the date of 15:45 on the Tuesday of the third week of May 2022.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 4,
            week: 2,
            weekDays: 1,
            year: 2022,
            time: "15:45"
        }
        const out = new Date("2022-05-10 15:45")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it(`dateOfMonth({month: 3, week: -1, weekDays: 3, year: 2022, time: "09:30"}) --> "2022-04-28T06:30:00.000Z" --> Returns the date of 09:30 on the Thursday of the last week of April 2022.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 3,
            week: -1,
            weekDays: 3,
            year: 2022,
            time: "09:30"
        }
        const out = new Date("2022-04-28 09:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })
})