import { Router } from 'express'
import { getGeneric } from '../controllers/generic.controller.js'

export const router = Router()

router.get('/', getGeneric)
