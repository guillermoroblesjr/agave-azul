import { Image } from 'react-native'
import imageCacheHoc from 'react-native-image-cache-hoc'
import RNFetchBlob from 'rn-fetch-blob'
import logger from '~/src/utils/logger'

export default async (url = ``) => new Promise(resolve => {
  const imageCache = imageCacheHoc(Image)
  imageCache
    .cacheFile(url, true)
    .then(async (result) => {
      RNFetchBlob.fs
        .readFile(result.localFilePath, `base64`)
        .then(base64Result => {
          resolve({
            ...result,
            base64: base64Result,
          })
        })
        .catch(err => {
          logger(`base64Result error`, err)
          resolve(err)
        })
    })
    .catch(err => {
      logger(`cacheFile error`, err)
      resolve(err)
    })
})
