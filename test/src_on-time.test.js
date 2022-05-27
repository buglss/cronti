const assert = require("assert")
const onTime = require("../src/on-time")

/***************************************************************************************************************************
 * Attention! The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 **************************************************************************************************************************/

describe("onTime", function() {
    it(`onTime({month: 4, week: 2}) --> "30 12 15-21 5 *" --> Returns the crontime expression that will be triggered daily at 12:30 in the third week of May and repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 4, week: 2 }), "30 12 15-21 5-5 *")
    })

    it(`onTime({month: 4, week: 2, weekDays: 3}) --> "30 12 18 5 *" --> Returns the crontime expression that will be triggered on Thursday of the third week of May at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 4, week: 2, weekDays: 3 }), "30 12 18 5 *")
    })

    it(`onTime({week: 0}) --> "30 12 1-7 * *" --> Returns the crontime expression that will be triggered daily at 12:30 for the first 7 days of each month and repeated annually.`, function() {
        assert.strictEqual(onTime({ week: 0 }), "30 12 1-7 * *")
    })

    it(`onTime({month: 2}) --> "30 12 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 2 }), "30 12 * 3 *")
    })

    it(`onTime({weekDays: 6}) --> "30 12 * * 6" --> Returns the crontime expression that will be triggered on Saturdays of each month at 12:30 and repeated annually.`, function() {
        assert.strictEqual(onTime({ weekDays: 6 }), "30 12 * * 6")
    })

    it(`onTime({month: 3, weekDays: 1}) --> "30 12 * 4 1" --> Returns the crontime expression that will be triggered at 12:30 on Mondays in April and will be repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 3, weekDays: 1 }), "30 12 * 4 1")
    })

    it(`onTime({}) --> "30 12 * * *" --> Returns the crontime expression that will be triggered at 12:30 every day of each month and repeated annually.`, function() {
        assert.strictEqual(onTime({}), "30 12 * * *")
    })

    it(`onTime({month: 4, week: 2, tick: 1}) --> "30 12 14-21 5 *" --> Returns the crontime expression that will be triggered every day from May 14th to 21st at 12:30pm and repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 4, week: 2, tick: 1 }), "30 12 14-21 5-5 *")
    })

    it(`onTime({month: 2, time: "09:45"}) --> "45 09 * 3 *" --> Returns the crontime expression that will be triggered every day of March at 09:45 and repeated annually.`, function() {
        assert.strictEqual(onTime({ month: 2, time: "09:45" }), "45 09 * 3 *")
    })
})