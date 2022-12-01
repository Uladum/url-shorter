import Code from '../models/url.js'

export const nonexistentCode = async (code: string) => {
  const existentCode = await Code.findOne({ code })
  if (existentCode === null) throw new Error(`Code ${code} not found`)
}
