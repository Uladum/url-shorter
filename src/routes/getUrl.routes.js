import { Router } from 'express'
import { check } from 'express-validator'
import validateResults from '../middlewares/validateResults.middleware.js'
import { getUrl } from '../controllers/getUrl.controller.js'

const router = Router()

router.get(
  '/',
  [
    // check('url', 'URL is required.').not().isEmpty(),
    check('url', 'URL not allowed').isURL(),
    validateResults
  ],
  getUrl
)

export default router
