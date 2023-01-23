const getTodayMilliseconds = require('./getTodayMilliseconds')
const { DAY_MILLISECONDS } = require('./dateConstants')

module.exports = function getTomorrowMilliseconds() {
  const tomorrowMilliseconds = getTodayMilliseconds() + DAY_MILLISECONDS
  return tomorrowMilliseconds
}