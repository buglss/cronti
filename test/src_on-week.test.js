/*
 * @license GPL-3.0
 */

const assert = require("assert")
const onWeek = require("../src/on-week")

/***************************************************************************************************************************
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 **************************************************************************************************************************/

describe("onWeek", function() {
    it(`onWeek("2022-05-26T09:30:00.000Z") --> "30 12 22-28 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will be repeated annually.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z"), "30 12 22-28 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", 2) --> "30 12 20-28 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will repeat annually. But the start date is 2 days ago.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", 2), "30 12 20-28 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", "0FD") --> "30 12 21-27 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will be repeated annually.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", "0FD"), "30 12 21-27 5-5 *")
    })

    it(`onWeek("2022-05-26T09:30:00.000Z", 2, "0FD") --> "30 12 19-27 5-5 *" --> Returns the crontime expression that will be triggered at 12:30 on every day of the week it is in, including May 26, 2022, which will repeat annually. But the start date is 2 days ago.`, function() {
        assert.strictEqual(onWeek("2022-05-26T09:30:00.000Z", 2, "0FD"), "30 12 19-27 5-5 *")
    })
})