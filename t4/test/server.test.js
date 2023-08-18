const expect = require('chai').expect
const request = require('request')

describe('back-end status code', ()=>{
    it('gives success response',(done)=>{
        request('http://localhost:8080/searches',(error, response, body)=>{
        expect(response.statusCode).to.equal(200)
        done();
        })
    })
})