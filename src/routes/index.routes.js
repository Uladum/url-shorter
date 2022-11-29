import { Router } from 'express'
import getUrl from './getUrl.routes.js'

const router = Router()

router.use('/url', getUrl)

export default router
