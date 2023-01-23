module.exports = function roundToBeginningOfDay (date) {
  const newDate = new Date(date)
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()
  const today = new Date(year, month, day)
  const todayMilliseconds = today.getTime()
  return todayMilliseconds
}