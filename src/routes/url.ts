import { Router } from 'express'
import { check } from 'express-validator'
import validateResults from '../middlewares/validateResults.js'
import { existentUrl, nonexistentCode } from '../helpers/validators.js'
import { getCode, createCode } from '../controllers/url.js'

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
