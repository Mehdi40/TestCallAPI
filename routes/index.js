// Importing needed modules
import router from 'koa-joi-router'
import verifyRequest from '../helpers/request'

// Setting needed constants
const Joi = router.Joi
const route = router()

// Creating the first basic/home route
route.get('/', async (ctx) => {
  ctx.body = 'Kikoo'
});

// Creating the route for the form
// We're here using KoaJoiRouter to validate the data
// received and sent
route.route({
  method: 'POST',
  path: '/form',
  validate: {
    body: {
      username: Joi.string().max(100),
      email: Joi.string().lowercase().email(),
      password: Joi.string().max(100),
      picture: Joi.string().min(5),
    },
    type: 'form',
    output: {
      200: {
        body: {
          message: Joi.string(),
          code: Joi.number(),
        }
      },
      404: {
        body: {
          message: Joi.string(),
          code: Joi.number(),
        }
      }
    },
  },
  handler: async (ctx) => {
    // The request is verified
    const verifiedRequest = await verifyRequest(ctx.request)
    // We set the status and the body of the response
    ctx.status = verifiedRequest.code
    ctx.body = verifiedRequest
  }
})

module.exports = route