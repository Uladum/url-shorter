import codeModel from '../models/shortUrl.model.js'

export const createCode = async url => {
  try {
    const code = Math.random().toString(36).substr(2, 5)

    const newCode = new codeModel({ url, code })
    await newCode.save()

    return { status: 201, data: { newCode } }
  } catch (err) {
    return { status: 500, data: { msg: 'getUrl() error', error: err } }
  }
}
