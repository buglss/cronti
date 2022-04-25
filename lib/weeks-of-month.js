/**
 * @param {number} firstDayOfWeek
 * @param {number} month
 * @param {number} year
 * @param {boolean} parse
 * @param {boolean} fill
 */

const dayOfWeek = require("./day-of-week")

function weeksParse(weeks = [], fill = true) {
    let parsedWeeks = weeks.map((x, i, arr) => {
        let list = []

        x.start = +x.start
        x.end = +x.end

        while(x.start <= x.end) {
            list.push(x.start + "")
            x.start++
        }

        if(fill) {
            if(i === 0) list = ["0", "0", "0", "0", "0", "0", "0", ...list].slice(-7)
            else if(i === arr.length - 1) list = [...list, "00", "00", "00", "00", "00", "00", "00"].slice(0, 7)
        }

        return list
    })

    return parsedWeeks.filter(x => x.length)
}

module.exports = function({ firstDayOfWeek = 1, month = null, year = new Date().getFullYear(), parse = false, fill = true }) {
    if(month === null) return

    month = Number(month)

    const isRightMonth = !!~[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].indexOf(month)
    if(isRightMonth) return

    let weeks = []
    let firstDay = dayOfWeek(firstDayOfWeek, new Date(year, month, 1))
    let lastDate = new Date(year, month + 1, 0).getDate()
    let startDate = 1
    let endDate = 7 - firstDay

    while(startDate <= lastDate) {
        weeks.push({ startDate: startDate, endDate: endDate })
        startDate = endDate + 1
        endDate += 7
        if(endDate > lastDate) endDate = lastDate
    }

    return parse ? weeksParse(weeks, fill) : weeks
}