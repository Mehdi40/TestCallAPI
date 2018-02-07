// Importing needed modules 
import request from 'request-promise'
import axios from 'axios'
import config from '../config/config'

export default async function verifyRequest(userRequest) {
  let result = {
    message: 'Oops !',
    code: 404,
  }

  if (userRequest.body !== null) {
    const username = userRequest.body.username || null
    const mail = userRequest.body.mail || null
    const password = userRequest.body.password || null
    const picture = userRequest.body.picture || null

    if (picture === null) {
      result.message = 'Oops ! No picture was provided.'
    }

    var opts = {
      method: 'GET',
      url: `${config.apiUrl}?url=${picture}`,
      headers: {
        'X-Mashape-Key': config.mashapeKey,
      },
      json: true 
    }

    const request = await axios(opts)
    .then(function (res) {

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
    .catch(function (error) {
      result.message = 'Oops ! Something went wrong during the process.'
      return result
    })

    return request
  } else {
    result.message = 'Oops ! The request body wasn\'t there.'
    return result
  }

  return request || result
}