/**
 * Created by Ivan Talalaev on 2/13/2017.
 */
let models = require('../models'),
  express = require('express'),
  router = express.Router();

/**
 * @api {post} /api/users create new user
 * @apiName CreateUser
 * @apiGroup Users
 * @apiError 500 Internal error
 * @apiSuccessExample Success-Response:
 * {
 *  "id": 8,
 *  "firstName": "John",
 *  "lastName": "Normand",
 *  "updatedAt": "2017-02-13T12:28:09.083Z",
 *  "createdAt": "2017-02-13T12:28:09.083Z"
 * }
 */
router.post('/', function (req, res) {
  models.User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  })
    .then(user => {
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

/**
 * @api {delete} /api/users/:userId Delete user by Id
 * @apiName CreateUser
 * @apiGroup Users
 * @apiError 500 Internal error
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
router.delete('/:userId', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.userId
    }
  })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

/**
 * @api {get} /api/users
 * @apiName CreateUser
 * @apiGroup Users
 * @apiError 500 Internal error
 * @apiSuccessExample Success-Response:
 * [
 * {
 *  "id": 8,
 *  "firstName": "John",
 *  "lastName": "Normand",
 *  "updatedAt": "2017-02-13T12:28:09.083Z",
 *  "createdAt": "2017-02-13T12:28:09.083Z"
 * },
 *  * {
 *  "id": 8,
 *  "firstName": "John",
 *  "lastName": "Normand",
 *  "updatedAt": "2017-02-13T12:28:09.083Z",
 *  "createdAt": "2017-02-13T12:28:09.083Z"
 * }
 * ...
 * ]
 */
router.get('/', function (req, res) {
  models.User.findAll({})
    .then(function (users) {
      res.send(users);
    });
});

module.exports = router;