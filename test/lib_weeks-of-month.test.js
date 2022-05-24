const assert = require("assert")
const weeksOfMonth = require("../lib/weeks-of-month")

describe("weeksOfMonth", function() {
    it("Returns the start-end of the weeks of May 2022.", function() {
        const options = {
            month: 4,
            year: 2022
        }
        const out = [
            { start: 1, end: 1 },
            { start: 2, end: 8 },
            { start: 9, end: 15 },
            { start: 16, end: 22 },
            { start: 23, end: 29 },
            { start: 30, end: 31 }
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })

    it("Returns the weeks of May 2022 as datasets.", function() {
        const options = {
            month: 4,
            year: 2022,
            parse: true,
            fill: false
        }
        const out = [
            ["1"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["9", "10", "11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20", "21", "22"],
            ["23", "24", "25", "26", "27", "28", "29"],
            ["30", "31"]
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })

    it("Returns datasets for the weeks of May 2022 to complete exactly 7 days.", function() {
        const options = {
            month: 4,
            year: 2022,
            parse: true
        }
        const out = [
            ["0", "0", "0", "0", "0", "0", "1"],
            ["2", "3", "4", "5", "6", "7", "8"],
            ["9", "10", "11", "12", "13", "14", "15"],
            ["16", "17", "18", "19", "20", "21", "22"],
            ["23", "24", "25", "26", "27", "28", "29"],
            ["30", "31", "00", "00", "00", "00", "00"]
        ]
        assert.deepStrictEqual(weeksOfMonth(options), out)
    })
})