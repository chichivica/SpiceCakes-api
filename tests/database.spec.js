/**
 * Created by Ivan Talalaev on 3/10/2017.
 */

process.env.NODE_ENV = "testing";


let chai = require('chai'),
  chaiHttp = require('chai-http'),
  chaiPromise = require('chai-as-promised'),
  assert = chai.assert,
  expect = chai.expect,
  models = require('../models');

chai.should();
chai.use(chaiHttp);
chai.use(chaiPromise);

describe('database tests', () => {
  before(done => {
    models.sequelize.sync()
      .then(() => done())
  });

  let clientId;
  it('create client', done => {
    models.User.create({
      firstName: 'Ivan',
      lastName: 'Talalaev'
    })
      .then(createdUser => {
        expect(createdUser.firstName).to.be.equal('Ivan');
        expect(createdUser.lastName).to.be.equal('Talalaev');
        expect(createdUser).to.have.property('updatedAt');
        expect(createdUser).to.have.property('createdAt');

        clientId = createdUser.id;
      })
      .should.be.fulfilled.then().should.notify(done)

  });

  let managerId;
  it('create manager', done => {
    models.User.create({
      firstName: 'James',
      lastName: 'Bond'
    })
      .then(createdUser => {
        expect(createdUser.firstName).to.be.equal('James');
        expect(createdUser.lastName).to.be.equal('Bond');
        expect(createdUser).to.have.property('updatedAt');
        expect(createdUser).to.have.property('createdAt');

        managerId = createdUser.id;
      })
      .should.be.fulfilled.then().should.notify(done)

  });

  it('create simple order', done => {
    models.Order.create({
      description: 'bake for me smth',
      deadLine: new Date(),
      price: 1000,
      managerId: managerId,
      clientId: clientId
    })
      .then(createdOder => {
        expect(createdOder.price).to.be.equal('1000'); //actually dunno wtf is this
        expect(createdOder.description).to.be.equal('bake for me smth');
      })
      .should.be.fulfilled.then().should.notify(done)
  });


});