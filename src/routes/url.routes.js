import { Router } from 'express'
import { check } from 'express-validator'
import validateResults from '../middlewares/validateResults.middleware.js'
import { getCode, createCode } from '../controllers/url.controller.js'

const router = Router()

router.get('/:code', getCode)
router.post(
  '/',
  [check('url', 'URL required or not allowed').isURL(), validateResults],
  createCode
)

export default router
