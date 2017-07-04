/* globals describe, it */

import http from 'http'
import assert from 'assert'
import mongoose from 'mongoose'
import config from 'config'

import '../src/app.js'
import './setup'

describe('Example Node Server', () => {
  it('should return 200', (done) => {
    http.get('http://127.0.0.1:8000', (res) => {
      assert.equal(200, res.statusCode);
      done();
    })
  })
})

mocha
rewire
sinon
nock
istambul