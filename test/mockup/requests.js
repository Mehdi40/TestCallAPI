// Importing needed modules
import config from '../../config/config'

// Creating some fake data
const fakeRequestWithoutPicture = {
  username: 'Oui',
  mail: 'oui@oui.oui',
  password: 'oui',
}

const fakeRequestWithoutFaces = {
  username: 'Oui',
  mail: 'oui@oui.oui',
  password: 'oui',
  picture: config.pictureWithNoFace
}

const fakeRequestWithOneFace = {
  username: 'Oui',
  mail: 'oui@oui.oui',
  password: 'oui',
  picture: config.pictureWithOneFace
}

const fakeRequestWithMultipleFaces = {
  username: 'Oui',
  mail: 'oui@oui.oui',
  password: 'oui',
  picture: config.pictureWithManyFaces
}

module.exports = { fakeRequestWithoutPicture, fakeRequestWithoutFaces, fakeRequestWithOneFace, fakeRequestWithMultipleFaces }