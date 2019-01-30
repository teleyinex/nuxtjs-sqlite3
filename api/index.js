import express from 'express'
const app = express()

// Require API routes
const sqlite = require('./routes/db')

// Import API Routes
app.use(sqlite)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

export default {
  path: '/api',
  handler: app
}
