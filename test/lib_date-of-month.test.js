const assert = require("assert")
const dateOfMonth = require("../lib/date-of-month")

describe("dateOfMonth", function() {
    it("Returns the date of 12:30 on the Wednesday of the first week of May 2022.", function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 4,
            week: 0,
            day: 2,
            year: 2022
        }
        const out = new Date("2022-05-04 12:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it("Returns the date of 12:30 on the Friday of the second week of April 2022.", function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 3,
            week: 1,
            day: 4,
            year: 2022
        }
        const out = new Date("2022-04-08 12:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it("Returns the date of 15:45 on the Tuesday of the third week of May 2022.", function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 4,
            week: 2,
            day: 1,
            year: 2022,
            time: "15:45"
        }
        const out = new Date("2022-05-10 15:45")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })

    it("Returns the date of 09:30 on the Thursday of the last week of April 2022.", function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const options = {
            month: 3,
            week: -1,
            day: 3,
            year: 2022,
            time: "09:30"
        }
        const out = new Date("2022-04-28 09:30")
        assert.deepStrictEqual(dateOfMonth(options), out)
    })
})