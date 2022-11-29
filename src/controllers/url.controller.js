import * as UrlLogic from '../logic/url.logic.js'

export const createCode = async (req, res) => {
  const { status, data } = await UrlLogic.createCode(req.body.url)
  return res.status(status).send(data)
}
