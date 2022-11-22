import express from 'express'

import { router } from './routes/index.routes.js'

export const app = express()

// Settings
app.set('port', 3000)

// Middlewares
app.use(express.json())
app.use(express.static('public'))

// Routes
app.use('/api', router)
