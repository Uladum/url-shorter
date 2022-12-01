import { Router } from 'express'
import url from './url.js'

const router = Router()

router.use('/url', url)

export default router
