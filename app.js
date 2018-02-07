// Importing needed modules
import Koa from 'koa'
import { verifiedRequest } from './helpers/request'
import config from './config/config'

// Importing needed routes
import routes from './routes/routes'

// Creating the koa app
const app = new Koa()

// Adding the middleware to the app
app.use(routes)

// Launching the app
const server = app.listen(config.port)

module.exports = server