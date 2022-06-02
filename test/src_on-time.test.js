/*
 * @license GPL-3.0
 */

const assert = require("assert")
const onTime = require("../src/on-time")

/***************************************************************************************************************************
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 **************************************************************************************************************************/

describe("onTime", function() {
    it(`onTime("4M", "2W") --> "30 12 15-21 5-5 *" --> Returns the crontime expression that will be triggered daily at 12:30 in the third week of May and repeated annually.`, function() {
        assert.strictEqual(onTime("4M", "2W"), "30 12 15-21 5-5 *")
    })

    it(`onTime("4M", "2W", "3WD") --> "30 12 18 5 *" --> Returns the crontime expression that will be triggered on Thursday of the third week of May at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("4M", "2W", "3WD"), "30 12 18 5 *")
    })

    it(`onTime("0W") --> "30 12 1-7 * *" --> Returns the crontime expression that will be triggered daily at 12:30 for the first 7 days of each month and repeated annually.`, function() {
        assert.strictEqual(onTime("0W"), "30 12 1-7 * *")
    })

    it(`onTime("2M") --> "30 12 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("2M"), "30 12 * 3 *")
    })

    it(`onTime("6WD") --> "30 12 * * 6" --> Returns the crontime expression that will be triggered on Saturdays of each month at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("6WD"), "30 12 * * 6")
    })

    it(`onTime("3M", "1WD") --> "30 12 * 4 1" --> Returns the crontime expression that will be triggered at 12:30 on Mondays in April and will be repeated annually.`, function() {
        assert.strictEqual(onTime("3M", "1WD"), "30 12 * 4 1")
    })

    it(`onTime() --> "30 12 * * *" --> Returns the crontime expression that will be triggered at 12:30 every day of each month and repeated annually.`, function() {
        assert.strictEqual(onTime(), "30 12 * * *")
    })

    it(`onTime("4M", "2W", 1) --> "30 12 14-21 5-5 *" --> Returns the crontime expression that will be triggered every day from May 14th to 21st at 12:30pm and repeated annually.`, function() {
        assert.strictEqual(onTime("4M", "2W", 1), "30 12 14-21 5-5 *")
    })

    it(`onTime("2M", "09:45") --> "45 09 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 09:45 and repeated annually.`, function() {
        assert.strictEqual(onTime("2M", "09:45"), "45 09 * 3 *")
    })

    it(`onTime("0FD", "4M", "2W") --> "30 12 14-20 5-5 *" --> Returns the crontime expression that will be triggered daily at 12:30 in the third week of May and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "4M", "2W"), "30 12 14-20 5-5 *")
    })

    it(`onTime("0FD", "4M", "2W", "3WD") --> "30 12 17 5 *" --> Returns the crontime expression that will be triggered on Thursday of the third week of May at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "4M", "2W", "3WD"), "30 12 17 5 *")
    })

    it(`onTime("0FD", "0W") --> "30 12 1-7 * *" --> Returns the crontime expression that will be triggered daily at 12:30 for the first 7 days of each month and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "0W"), "30 12 1-7 * *")
    })

    it(`onTime("0FD", "2M") --> "30 12 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "2M"), "30 12 * 3 *")
    })

    it(`onTime("0FD", "6WD") --> "30 12 * * 6" --> Returns the crontime expression that will be triggered on Saturdays of each month at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "6WD"), "30 12 * * 6")
    })

    it(`onTime("0FD", "3M", "1WD") --> "30 12 * 4 1" --> Returns the crontime expression that will be triggered at 12:30 on Mondays in April and will be repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "3M", "1WD"), "30 12 * 4 1")
    })

    it(`onTime("0FD", ) --> "30 12 * * *" --> Returns the crontime expression that will be triggered at 12:30 every day of each month and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", ), "30 12 * * *")
    })

    it(`onTime("0FD", "4M", "2W", 1) --> "30 12 13-20 5-5 *" --> Returns the crontime expression that will be triggered every day from May 14th to 21st at 12:30pm and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "4M", "2W", 1), "30 12 13-20 5-5 *")
    })

    it(`onTime("0FD", "2M", "09:45") --> "45 09 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 09:45 and repeated annually.`, function() {
        assert.strictEqual(onTime("0FD", "2M", "09:45"), "45 09 * 3 *")
    })
})