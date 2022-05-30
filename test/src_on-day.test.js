/*
 * @license GPL-3.0
 */

const assert = require("assert")
const onDay = require("../src/on-day")

describe("onDay", function() {
    it(`onDay("2022-05-26T09:30:00.000Z") --> "30 12 26 5 *" --> Returns the crontime on May 26, 2022 at 12:30, which will be repeated every year.`, function() {
        assert.strictEqual(onDay(new Date("2022-05-26 12:30")), "30 12 26 5 *")
    })

    it(`onDay("2022-05-26T09:30:00.000Z", 2) --> "30 12 24 5 *" --> Returns the crontime on May 24, 2022 at 12:30, which will be repeated every year.`, function() {
        assert.strictEqual(onDay(new Date("2022-05-26 12:30"), 2), "30 12 24 5 *")
    })
})