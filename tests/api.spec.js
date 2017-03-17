/**
 * Created by Ivan Talalaev on 3/10/2017.
 */

process.env.NODE_ENV = "testing";

let app = require('../app'),
  express = require('express'),
  chai = require('chai'),
  assert = chai.assert,
  expect = chai.expect,

  _ = require('lodash'),
  config = require('config'),

  chaiHttp = require('chai-http'),
  chaiPromise = require('chai-as-promised');

chai.should();
chai.use(chaiHttp);
chai.use(chaiPromise);

describe('simple api tests', () => {
  let firstName = (Math.random() * 1e36).toString(36),
    lastName = (Math.random() * 1e36).toString(36);
  it('{post} /api/users', done => {
    chai.request(app)
      .post('/api/users')
      .send({
        firstName,
        lastName
      })
      .end((err, res) => {
        assert(!err, `api error ${err}`);
        expect(res.body.firstName).to.be.equal(firstName);
        expect(res.body.lastName).to.be.equal(lastName);
        done();
      })
  })
});