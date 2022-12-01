import { Request, Response } from 'express'
import * as UrlLogic from '../logic/url'

export const getCode = async (req: Request, res: Response) => {
  const { status, data } = await UrlLogic.getCode(req.params.code)
  return res.status(status).send(data)
}

export const createCode = async (req: Request, res: Response) => {
  const { status, data } = await UrlLogic.createCode(req.body.url)
  return res.status(status).send(data)
}
