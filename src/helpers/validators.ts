import Code from '../models/url.js'

export const existentUrl = async (url: string) => {
  const existentUrl = await Code.findOne({ url })
  if (existentUrl)
    throw new Error(
      `URL ${url} alredy exists on BD with code ${existentUrl.code}`
    )
}

export const nonexistentCode = async (code: string) => {
  const existentCode = await Code.findOne({ code })
  if (existentCode === null) throw new Error(`Code ${code} not found`)
}
