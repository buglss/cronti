const assert = require("assert")
const dayOfWeek = require("../lib/day-of-week")

describe("dayOfWeek", function() {
    it("Returns the day of the week on May 24, 2022 according to the Turkish calendar.", function() {
        // Days: Sunday: 6, Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4, Saturday: 5
        const date = new Date("2022-05-24")
        const out = 1
        assert.strictEqual(dayOfWeek(date, { firstDayOfWeek: 1 }), out)
    })

    it("Returns the day of the week on May 24, 2022 according to the American calendar.", function() {
        // Days: Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6
        const date = new Date("2022-05-24")
        const out = 2
        assert.strictEqual(dayOfWeek(date), out)
    })
})