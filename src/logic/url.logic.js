import codeModel from '../models/shortUrl.model.js'

export const getCode = async code => {
  try {
    const getCode = await codeModel.findOne({ code })

    if (getCode === null)
      return { status: 404, data: { msg: 'Code not found' } }

    return { status: 200, data: { code: getCode.code, url: getCode.url } }
  } catch (err) {
    return { status: 500, data: { msg: 'getCode() error', error: err } }
  }
}

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
