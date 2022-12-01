import Code from '../models/url'

export const getCode = async (code: string) => {
  try {
    const getCode = await Code.findOne({ code })

    if (!getCode) return { status: 404, data: 'Code not found' }

    return { status: 200, data: { url: getCode.url, code: getCode.code } }
  } catch (err) {
    return { status: 500, data: { msg: 'getCode() error', error: err } }
  }
}

export const createCode = async (url: string) => {
  try {
    const code = Math.random().toString(36).substr(2, 5)

    const existentUrl = await Code.findOne({ url }).select('url code -_id')
    if (existentUrl)
      return {
        status: 200,
        data: { url: existentUrl.url, code: existentUrl.code }
      }

    const newCode = new Code({ url, code })
    await newCode.save()

    return { status: 201, data: { url: newCode.url, code: newCode.code } }
  } catch (err) {
    return { status: 500, data: { msg: 'getUrl() error', error: err } }
  }
}
