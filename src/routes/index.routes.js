import { Router } from 'express'
import { router as genericRoutes } from './generic.routes.js'

export const router = Router()

router.use('/', genericRoutes)
