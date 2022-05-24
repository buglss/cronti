/**
 * @param {number} month
 * @param {number} week
 * @param {number} day
 * @param {string} time
 * @param {number} tick
 */

const dateOfMonth = require("../lib/date-of-month")
const weekOfMonth = require("../lib/week-of-month")
const diffSecondsUptoToday = require("../lib/diff-seconds-upto-today")
const weekOfDate = require("../lib/week-of-date")

module.exports = function({ month = null, week = null, day = null, time = "12:30", tick = 0 }) {
    const isRightMonth = !month || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(+month)
    const isRightWeek = !week || [0, 1, 2, -1].includes(+week)
    const isRightTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    const isRightDay = !day || [0, 1, 2, 3, 4, 5, 6].includes(day)
    if(!isRightMonth || !isRightWeek || !isRightDay || !isRightTime) return

    let now = new Date()
    let thisMonth = now.getMonth() + 1
    let thisYear = now.getFullYear()
    let [hours, minutes] = time.split(":")
    tick = +tick

    if(month !== null && week !== null) {
        month = +month
        week = +week

        let wid = weekOfDate(now)

        if(!wid) return

        if(thisMonth > month) thisYear++
        else if(thisMonth === month) {
            if(day !== null) {
                day = +day
                let date = dateOfMonth({ month, week, day, time, year: thisYear })
                let diff = diffSecondsUptoToday(date)
                if(diff < 0) thisYear++
            } else if((wid.index > week) && (week !== -1)) thisYear++
        }

        if(day !== null) {
            day = +day
            let date = dateOfMonth({ month, week, day, time, year: thisYear })
            if(tick) date.setDate(date.getDate() - tick)
            return date.getMinutes() + " " + date.getHours() + " " + date.getDate() + " " + date.getMonth() + " *"
        } else {
            let week = weekOfMonth({ month, week, year: thisYear })
            let firstDate = week[0]
            let lastDate = week[week.length - 1]

            if(tick) {
                let startDate = new Date(thisYear, month, firstDate)
                startDate.setDate(startDate.getDate() - tick)
                firstDate = startDate.getDate()
                month = startDate.getMonth()
            }
            return minutes + " " + hours + " " + firstDate + "-" + lastDate + " " + month + " *"
        }
    } else if(month === null && week !== null && day === null) {
        week = +week
        if(week === -1) return

        let crontime
        switch(week) {
            case 0:
                crontime = minutes + " " + hours + " 1-7 * *"
                break;
            case 1:
                crontime = minutes + " " + hours + " 8-14 * *"
                break;
            case 2:
                crontime = minutes + " " + hours + " 15-21 * *"
                break;
        }
        return crontime
    } else {
        month = month ? +month + 1 : "*"
        day = day ? +day + 1 : "*"
        return minutes + " " + hours + " * " + month + " " + day
    }
}