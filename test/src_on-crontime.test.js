const assert = require("assert")
const onCrontime = require("../src/on-crontime")

describe("onCrontime", function() {
    it("Returns whatever is given as a parameter.", function() {
        // TODO: Add validation in onCrontime function
        let crontime = "0 2 * * *"
        assert.strictEqual(onCrontime(crontime), crontime)
    })
})