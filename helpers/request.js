// Importing needed modules 
import request from 'request-promise'
import axios from 'axios'
import config from '../config/config'

// Exporting the asynchronous function that check the request
export default async function verifyRequest(userRequest) {
  // Initializing the final variable
  let result = {
    message: 'Oops !',
    code: 404,
  }

  // Checking if all the data have been sent
  // But, thanks to Koa Joi Router validation
  // it actually should be fine here
  if (userRequest.body !== null) {
    const username = userRequest.body.username || null
    const mail = userRequest.body.mail || null
    const password = userRequest.body.password || null
    const picture = userRequest.body.picture || null

    // Checking if we have a picture
    // (as it is the only non-requiered field)
    if (picture === null) {
      result.message = 'Oops ! No picture was provided.'
    }

    // Setting the options of the HTTP request
    // to the external API
    var opts = {
      method: 'GET',
      url: `${config.apiUrl}?url=${picture}`,
      headers: {
        'X-Mashape-Key': config.mashapeKey,
      },
      json: true 
    }

    // This is the request
    const request = await axios(opts)
    .then(function (res) {

      // Checking the result...
      if (res.data.faces.length < 1) {
        result.message = 'No faces found on this image.'
      } else if (res.data.faces.length === 1) {
        result.message = 'Success ! A face has been found on this image.'
        result.code = 200
      } else {
        result.message = 'Success ! Faces have been found on this image.'
        result.code = 200
      }

      return result
    })
    // If something went wrong...
    .catch(function (error) {
      result.message = 'Oops ! Something went wrong during the process.'
      return result
    })

    return request
  } else {
    result.message = 'Oops ! The request body wasn\'t there.'
    return result
  }

  // We return the request var if it exist
  // or the result var
  return request || result
}