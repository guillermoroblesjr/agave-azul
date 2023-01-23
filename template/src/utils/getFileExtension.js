export default fileName => {
  const fileNameArray = fileName.split(`.`)
  const extension = fileName[fileNameArray.length - 1]
  return extension
}