const assert = require("assert")
const weekOfMonth = require("../lib/week-of-month")

describe("weekOfMonth", function() {
    it(`weekOfMonth({month: 4, week: 0, year: 2022}) --> ["1"] --> Returns the first week of May of 2022 as datasets.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        const options = {
            month: 4,
            week: 0,
            year: 2022
        }
        const out = ["1"]
        assert.deepStrictEqual(weekOfMonth(options), out)
    })

    it(`weekOfMonth({month: 4, week: 1, year: 2022}) --> returns ["2", "3", "4", "5", "6", "7", "8"] --> Returns the second week of May 2022 as datasets.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        const options = {
            month: 4,
            week: 1,
            year: 2022
        }
        const out = ["2", "3", "4", "5", "6", "7", "8"]
        assert.deepStrictEqual(weekOfMonth(options), out)
    })

    it(`weekOfMonth({month: 4, week: 2, year: 2022}) --> ["9", "10", "11", "12", "13", "14", "15"] --> Returns the third week of May of 2022 as datasets.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        const options = {
            month: 4,
            week: 2,
            year: 2022
        }
        const out = ["9", "10", "11", "12", "13", "14", "15"]
        assert.deepStrictEqual(weekOfMonth(options), out)
    })

    it(`weekOfMonth({month: 4, week: -1, year: 2022}) --> ["30", "31"] --> Returns the last week of May of 2022 as datasets.`, function() {
        // Weeks: First: 0, Second: 1, Third: 2, Last: -1
        const options = {
            month: 4,
            week: -1,
            year: 2022
        }
        const out = ["30", "31"]
        assert.deepStrictEqual(weekOfMonth(options), out)
    })
})