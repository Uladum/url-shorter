import { Router } from 'express'
import { check } from 'express-validator'
import validateResults from '../middlewares/validateResults.middleware.js'
import { existentUrl, nonexistentCode } from '../helpers/validators.helper.js'
import { getCode, createCode } from '../controllers/url.controller.js'

const router = Router()

router.get(
  '/:code',
  [check('code').custom(nonexistentCode), validateResults],
  getCode
)
router.post(
  '/',
  [
    check('url', 'URL required or not allowed').isURL(),
    check('url').custom(existentUrl),
    validateResults
  ],
  createCode
)

export default router
