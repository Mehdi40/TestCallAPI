// Importing needed modules
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)
const should = chai.should()
import 'babel-polyfill'
import verifyRequest from '../../helpers/request'
import {
  fakeRequestWithoutFaces,
  fakeRequestWithoutPicture,
  fakeRequestWithOneFace,
  fakeRequestWithMultipleFaces,
} from '../mockup/requests'

// Describing the function we're testing
describe('[Request Helper] - verifyRequest', async () => {
  // Establishing the multiples cases
  it('should return a 404 error message if no picture is provided', async () => {
    const p = await verifyRequest({body: fakeRequestWithoutPicture})

    p.should.contain({ message: 'Oops ! Something went wrong during the process.' })
    p.should.contain({ code: 404 })
  })

  it('should return a 404 error message if a picture with no faces is provided', async () => {
    const p = await verifyRequest({body: fakeRequestWithoutFaces })
    
    p.should.contain({ message: 'No faces found on this image.' })
    p.should.contain({ code: 404 })
  })

  it('should return a 200 success message if a picture with one face is provided', async () => {
    const p = await verifyRequest({body: fakeRequestWithOneFace })

    p.should.contain({ message: 'Success ! A face has been found on this image.' })
    p.should.contain({ code: 200 })
  })

  it('should return a 200 success message if a picture with many faces is provided', async () => {
    const p = await verifyRequest({body: fakeRequestWithMultipleFaces })

    p.should.contain({ message: 'Success ! Faces have been found on this image.' })
    p.should.contain({ code: 200 })
  })
})