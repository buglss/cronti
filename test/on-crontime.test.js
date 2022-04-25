const assert = require("assert")
const onCrontime = require("../src/on-crontime")

describe("onCrontime", function() {
    it("parametre olarak ne verilirse o döner", function() {
        let crontime = "0 2 * * *"
        assert.strictEqual(onCrontime(crontime), crontime)
    })
})