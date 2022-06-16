const assert = require("assert")
const isValidCronExpression = require("../lib/is-valid-cron-expression")

function random(min, max, options = { toString: true }) {
    return Math.floor(min + Math.random() * (max - min + 1)) + (options.toString ? "" : 0)
}

describe("isValidCronExpression", function() {
    const chars = [",", "-", "*", "/"]
    const dataset = ["*/1 22 16-16 6-6 *"].concat([...new Array(5)].map((d, i) => {
        let char = chars[i]
        let mins = "", hours = "", days = "", months = "", weekdays = ""
        switch(true) {
            case char === ",":
                mins = random(0, 59) + "," + random(0, 59) + "," + random(0, 59)
                hours = random(0, 23) + "," + random(0, 23) + "," + random(0, 23)
                days = random(1, 31) + "," + random(1, 31) + "," + random(1, 31)
                months = random(1, 12) + "," + random(1, 12) + "," + random(1, 12)
                weekdays = random(0, 6) + "," + random(0, 6) + "," + random(0, 6)
                break;
            case char === "-":
                mins = random(0, 59) + "-" + random(0, 59)
                hours = random(0, 23) + "-" + random(0, 23)
                days = random(1, 31) + "-" + random(1, 31)
                months = random(1, 12) + "-" + random(1, 12)
                weekdays = random(0, 6) + "-" + random(0, 6)
                break;
            case char === "*":
                mins = "*"
                hours = "*"
                days = "*"
                months = "*"
                weekdays = "*"
                break;
            case char === "/":
                mins = random(0, 59) + "/" + random(1, 45)
                hours = random(0, 23) + "/" + random(1, 4)
                days = random(1, 31) + "/" + random(1, 7)
                months = random(1, 12) + "/" + random(1, 3)
                weekdays = random(0, 6) + "/" + random(1, 2)
                break;

            default:
                mins = random(0, 59)
                hours = random(0, 23)
                days = random(1, 31)
                months = random(1, 12)
                weekdays = random(0, 6)
                break;
        }
        return `${mins} ${hours} ${days} ${months} ${weekdays}`
    }))

    dataset.forEach(crontime => {
        it(`isValidCronExpression(${crontime}) --> true --> Returns true.`, function() {
            assert.strictEqual(isValidCronExpression(crontime), true)
        })
    })
})