/**
 * Created by Ivan Talalaev on 2/13/2017.
 */
let models = require('../models'),
  express = require('express'),
  events = require('events'),
  router = express.Router();

/**
 * @api {post} /api/users Create new user
 * @apiName CreateUser
 * @apiGroup Users
 * @apiParamExample {json} Request-Example:
 * {
 *    "firstName" : "John",
 *    "lastName" : "Normand"
 * }
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
 * @api {delete} /api/users/:id Delete user by Id
 * @apiName DeleteUser
 * @apiParam {Number} id of the user which needs to be deleted
 * @apiGroup Users
 * @apiError 500 Internal error
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
router.delete('/:id', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.id
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
 * @api {get} /api/users Get full list of users
 * @apiName GetUsers
 * @apiGroup Users
 * @apiError 500 Internal error
 * @apiSuccessExample Success-Response:
 * [
 *   {
 *      "id": 8,
 *      "firstName": "John",
 *      "lastName": "Normand",
 *      "updatedAt": "2017-02-13T12:28:09.083Z",
 *      "createdAt": "2017-02-13T12:28:09.083Z"
 *  },
 *  {
 *      "id": 8,
 *      "firstName": "John",
 *      "lastName": "Normand",
 *      "updatedAt": "2017-02-13T12:28:09.083Z",
 *      "createdAt": "2017-02-13T12:28:09.083Z"
 *  }
 *]
 */
router.get('/', function (req, res) {
  models.User.findAll({})
    .then(function (users) {
      res.send(users);
    });
});


/**
 * @api {post} /api/users/:id Create new user
 * @apiName FindUser
 * @apiGroup Users
 * @apiParam {Number} id of the user to find with
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
router.get('/:id', function (req, res) {
  models.User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(user => {
      res.send(user);
    });
});

module.exports = router;