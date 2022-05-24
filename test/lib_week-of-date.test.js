const assert = require("assert")
const weekOfDate = require("../lib/week-of-date")

describe("weekOfDate", function() {
    it("Returns the week object of the date May 24, 2022.", function() {
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const date = new Date("2022-05-24")
        const out = {
            week: ["23", "24", "25", "26", "27", "28", "29"],
            weeks: [
                ["1"],
                ["2", "3", "4", "5", "6", "7", "8"],
                ["9", "10", "11", "12", "13", "14", "15"],
                ["16", "17", "18", "19", "20", "21", "22"],
                ["23", "24", "25", "26", "27", "28", "29"],
                ["30", "31"]
            ],
            total: 6,
            index: 4
        }
        assert.deepStrictEqual(weekOfDate(date), out)
    })
})