import shortUrl from '../models/shortUrl.model.js'

export const getUrl = async url => {
  try {
    const shortUrl = Math.random().toString(36).substr(2, 5)

    return { status: 200, data: { shortUrl } }
  } catch (err) {
    return { status: 500, data: { msg: 'getUrl() error', error: err } }
  }
}
