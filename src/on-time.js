const dateOfMonth = require("../lib/date-of-month")
const weekOfMonth = require("../lib/week-of-month")
const diffSecondsUptoToday = require("../lib/diff-seconds-upto-today")
const weekOfDate = require("../lib/week-of-date")

/**
 * Create crontime with various combinations of month, week, weekdays, hours, minutes and tick.
 * Only time is a mandatory parameter. All crontime expressions are set according to this time parameter.
 * The crontime expression that will be triggered before the entered date according to the tick value is returned.
 * If only the month(0..11) and week(0,1,2,-1) parameter is filled, the crontime expression that will be triggered every day from the first day of the week to the last day of that week is returned.
 * If only the month(0..11), week(0,1,2,-1) and weekdays(0..6) parameters are populated, the crontime expression for that day is returned.
 * If only the week(0,1,2,-1) parameter is populated, the crontime expression that will be triggered every day during that week is returned. Except last week(-1).
 * If only the month(0..11) parameter is populated, the crontime expression is returned for each day in that month.
 * If only the weekdays(0..6) parameter is populated, the crontime expression is returned for this weekdays every month.
 * If only the month(0..11) and weekdays(0..6) parameters are populated, the crontime expression is returned for these weekdays of this month.
 * If no parameters are filled in, the crontime expression is returned for each day of each month.
 * 
 * @param {Object} options Options.
 * @param {Number=} options.month Month(0..11) for crontime expression.
 * @param {Number=} options.week Week(0,1,2,-1) for crontime expression.
 * @param {Number=} options.weekDays Weekdays(0..6) for crontime expression.
 * @param {"dd:mm"} [options.time="12:30"] Time(dd:mm) for crontime expression.
 * @param {Number=} [options.tick=0] The number of days to subtract from the date. Month and week required parameters for tick.
 * @param {Number=} [options.firstDayOfWeek=1] First day of week. It takes values between 0 and 6.
 * 
 * @returns {String} Crontime.
 * 
 * @summary Create crontime with various combinations of month, week, weekdays, hours, minutes and tick.
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 15-21 5 *"
 * onTime({month: 4, week: 2})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 18 5 *"
 * onTime({month: 4, week: 2, weekDays: 3})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 1-7 * *"
 * onTime({week: 0})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * 3 *"
 * onTime({month: 2})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * * 6"
 * onTime({weekDays: 6})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * 4 1"
 * onTime({month: 3, weekDays: 1})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * * *"
 * onTime({})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 14-21 5 *"
 * onTime({month: 4, week: 2, tick: 1})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "45 09 * 3 *"
 * onTime({month: 2, time: "09:45"})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 14-20 5-5 *"
 * onTime({firstDayOfWeek: 0, month: 4, week: 2})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 17 5 *"
 * onTime({firstDayOfWeek: 0, month: 4, week: 2, weekDays: 3})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 1-7 * *"
 * onTime({firstDayOfWeek: 0, week: 0})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * 3 *"
 * onTime({firstDayOfWeek: 0, month: 2})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * * 6"
 * onTime({firstDayOfWeek: 0, weekDays: 6})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * 4 1"
 * onTime({firstDayOfWeek: 0, month: 3, weekDays: 1})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 * * *"
 * onTime({})firstDayOfWeek: 0, 
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "30 12 13-20 5-5 *"
 * onTime({firstDayOfWeek: 0, month: 4, week: 2, tick: 1})
 * 
 * @example
 * // The crontime expression change according to the time they were created. The time to be tested is 27.05.2022.
 * // returns "45 09 * 3 *"
 * onTime({firstDayOfWeek: 0, month: 2, time: "09:45"})
 * 
 * @license GPL-3.0
 */

module.exports = function({ month, week, weekDays, time = "12:30", tick = 0, firstDayOfWeek = 1 }) {
    const isValidMonth = !month || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].includes(+month)

    // 0: first, 1: second, 2: third, -1: last
    const isValidWeek = !week || [0, 1, 2, -1].includes(+week)

    const isValidTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time)
    const isValidDay = !weekDays || [0, 1, 2, 3, 4, 5, 6].includes(+weekDays)
    if(!isValidMonth || !isValidWeek || !isValidDay || !isValidTime || isNaN(+tick)) return

    let now = new Date()
    let thisMonth = now.getMonth() + 1
    let thisYear = now.getFullYear()
    let [hours, minutes] = time.split(":")
    tick = Number(tick)

    if((month || month === 0) && (week || week === 0)) {
        month = Number(month)
        week = Number(week)

        let wod = weekOfDate(now, firstDayOfWeek)

        if(!wod) return

        if(thisMonth > month) thisYear++
        else if(thisMonth === month) {
            if(weekDays || weekDays === 0) {
                weekDays = Number(weekDays)
                let date = dateOfMonth({ month, week, weekDays, time, year: thisYear, firstDayOfWeek })
                let diff = diffSecondsUptoToday(date)
                if(diff < 0) thisYear++
            }
            else if((wod.index > week) && (week !== -1)) thisYear++
        }

        if(weekDays || weekDays === 0) {
            weekDays = Number(weekDays)
            let date = dateOfMonth({ month, week, weekDays, time, year: thisYear, firstDayOfWeek })
            if(tick) date.setDate(date.getDate() - tick)
            let mins = date.getMinutes()
            let hours = date.getHours()
            let days = date.getDate()
            month = date.getMonth() + 1
            return `${mins} ${hours} ${days} ${month} *`
        }
        else {
            week = weekOfMonth({ month, week, year: thisYear, firstDayOfWeek })
            let firstDate = week[0]
            let lastDate = week[week.length - 1]
            let firstMonth = month

            if(tick) {
                let startDate = new Date(thisYear, month, firstDate)
                startDate.setDate(startDate.getDate() - tick)
                firstDate = startDate.getDate()
                firstMonth = startDate.getMonth()
            }

            return `${minutes} ${hours} ${firstDate}-${lastDate} ${++firstMonth}-${++month} *`
        }
    }
    else if((!month && month !== 0) && (week || week === 0) && (!weekDays && weekDays !== 0)) {
        week = Number(week)

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
    }
    else {
        month = (month || month === 0) ? Number(month) + 1 : "*"
        weekDays = (weekDays || weekDays === 0) ? Number(weekDays) : "*"
        return minutes + " " + hours + " * " + month + " " + weekDays
    }
}