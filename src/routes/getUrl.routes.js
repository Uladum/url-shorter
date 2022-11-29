import { Router } from 'express'
import { getUrl } from '../controllers/getUrl.controller.js'

const router = Router()

router.get('/', getUrl)

export default router
