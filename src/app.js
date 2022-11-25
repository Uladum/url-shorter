import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import { router } from './routes/index.routes.js'

export const app = express()

// Settings
app.set('port', 3000)

// Middlewares
app.use(express.json())
app.use(express.static('public'))
app.use(morgan('dev'))

// Routes
app.use('/api', router)
