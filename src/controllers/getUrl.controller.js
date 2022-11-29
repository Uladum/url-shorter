import * as getUrlLogic from '../logic/getUrl.logic.js'

export const getUrl = async (req, res) => {
  const { status, data } = await getUrlLogic.getUrl(req.body.url)
  return res.status(status).send(data)
}
