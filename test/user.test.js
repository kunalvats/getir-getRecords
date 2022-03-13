/**
 * @fileoverview Integration tests
 * @author Kunal Vats (kunalvats2000@gmail.com)
 */
const app = require('../server')
const supertest = require('supertest')
const request = supertest(app);
const assert = require('chai').assert

describe('/api/user/getUserInfo POST API', () => {
    it('GET request is not allowed', async () => {
      const result = await request.get('/api/user/getUserInfo')
      assert.equal(result.status, 404)
    })
    it('/api/user/getUserInfo POST API record end point should return code 0 for success', async function () {      
      const result = await request.post('/api/user/getUserInfo')
        .send({
          "startDate": "2016-01-26",
          "endDate": "2018-02-02",
          "minCount": 2700,
          "maxCount": 3000
        })
        assert.equal(result.status, 200);
        assert.equal(result.body.code, 0);
        assert.exists(result.body.records);
    })
    it('/api/user/getUserInfo POST API record end point should be failed with missing parameters with code 404 ', async () => {
      const result = await request.post('/records').send({
          startDate: '2016-01-26'
        })
        assert.equal(result.status, 404)
    })
  })