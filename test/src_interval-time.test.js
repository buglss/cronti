const assert = require("assert")
const intervalTime = require("../src/interval-time")

describe("intervalTime", function() {
    it(`intervalTime("2022-04-25T09:30:00.000Z", "2022-05-15T09:30:00.000Z") --> "30 12 25-15 4-5 *" --> The crontime will every year, it will start at 12:30 on April 15 and running every days until May 15 at 12:30.`, function() {
        let startDate = new Date("2022-04-25 12:30")
        let endDate = new Date("2022-05-15 12:30")

        // mins hours days months weekdays
        let crontime = "30 12 25-15 4-5 *"
        assert.strictEqual(intervalTime(startDate, endDate), crontime)
    })

    it(`intervalTime("2022-06-10T09:30:00.000Z", "2022-07-20T09:30:00.000Z", "4d") --> "30 12 10-20/4 6-7 *" --> The crontime will every year, it will start at 12:30 on June 10 and running every 4 days until July 20 at 12:30.`, function() {
        let startDate = new Date("2022-06-10 12:30")
        let endDate = new Date("2022-07-20 12:30")
        let step = "4d"

        // mins hours days months weekdays
        let crontime = "30 12 10-20/4 6-7 *"
        assert.strictEqual(intervalTime(startDate, endDate, step), crontime)
    })

    it(`intervalTime("2022-04-01T09:30:00.000Z", "2022-07-05T09:30:00.000Z", "2h") --> "30 */2 1-5 4-7 *" --> The crontime will every year, it will start at 00:30 on April 1 and running every 2 hours until July 5 at 00:30.`, function() {
        let startDate = new Date("2022-04-01 12:30")
        let endDate = new Date("2022-07-05 12:30")
        let step = "2h"

        // mins hours days months weekdays
        let crontime = "30 */2 1-5 4-7 *"
        assert.strictEqual(intervalTime(startDate, endDate, step), crontime)
    })

    it(`intervalTime("2022-04-01T09:30:00.000Z", "2022-04-02T09:30:00.000Z", "30m") --> "*/30 12 1-2 4-4 *" --> The crontime will every year, it will start at 12:30 on April 1 and running every 30 minutes until April 2 at 12:30.`, function() {
        let startDate = new Date("2022-04-01 12:30")
        let endDate = new Date("2022-04-02 12:30")
        let step = "30m"

        // mins hours days months weekdays
        let crontime = "*/30 12 1-2 4-4 *"
        assert.strictEqual(intervalTime(startDate, endDate, step), crontime)
    })
})