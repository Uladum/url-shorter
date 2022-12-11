import {
  created,
  internalServerError,
  notFound,
  ok
} from '../helpers/errorHandler'
import Code from '../models/url'

export const getCode = async (code: string) => {
  try {
    const getCode = await Code.findOne({ code })
    if (!getCode) return notFound('Code not found')

    return ok({ url: getCode.url, code: getCode.code })
  } catch (err) {
    return internalServerError(`getCode()`, err)
  }
}

export const createCode = async (url: string) => {
  try {
    const code = Math.random().toString(36).substring(2, 7)

    const existentUrl = await Code.findOne({ url }).select('url code -_id')
    if (existentUrl) return ok({ url: existentUrl.url, code: existentUrl.code })

    const newCode = new Code({ url, code })
    await newCode.save()

    return created({ url: newCode.url, code: newCode.code })
  } catch (err) {
    return internalServerError(`getUrl()`, err)
  }
}
