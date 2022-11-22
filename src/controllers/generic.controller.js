import { generic } from '../logic/generic.logic.js'

export const getGeneric = async (req, res) => {
  const { status, data } = await generic()
  return res.status(status).send(data)
}
