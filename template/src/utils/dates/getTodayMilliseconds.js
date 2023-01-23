module.exports = function getTodayMilliseconds() {
  const now = new Date()
  const day = now.getDate()
  const month = now.getMonth()
  const year = now.getFullYear()
  const today = new Date(year, month, day)
  const todayMilliseconds = today.getTime()
  return todayMilliseconds
}