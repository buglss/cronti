const assert = require("assert")
const onDate = require("../src/on-date")

describe("onDate", function() {
    it(`onDate("2022-05-26T09:30:00.000Z") --> "30 12 26 * *" --> Returns the crontime at 12:30 on the 26th of the month, which will repeat every month and every year.`, function() {
        assert.strictEqual(onDate(new Date("2022-05-26 12:30")), "30 12 26 * *")
    })
})