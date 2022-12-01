import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

import indexRoutes from './routes/index.js'

const app = express()

// Settings
app.set('port', 3000)

// Middlewares
app.use(express.json())
app.use(express.static('public'))
app.use(morgan('dev'))

// Routes
app.use('/api', indexRoutes)

export default app
