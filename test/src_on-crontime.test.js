const assert = require("assert")
const onCrontime = require("../src/on-crontime")

describe("onCrontime", function() {
    it(`onCrontime("0 2 * * *") --> "0 2 * * *" --> The used value is returned when a valid crontime expression is use.`, function() {
        let crontime = "0 2 * * *"
        assert.strictEqual(onCrontime(crontime), crontime)
    })
})