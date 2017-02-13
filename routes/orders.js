/**
 * Created by Ivan Talalaev on 2/13/2017.
 */
let models = require('../models'),
  express = require('express'),
  moment = require('moment'),
  router = express.Router();

/**
 * @api {post} /api/orders Create new order
 * @apiName CreateOrder
 * @apiGroup Orders
 * @apiError IncorrectOrder 400 clientId and managerId must be provided
 * @apiParamExample {json} Request-Example:
 * {
    "description" : "first simple order",
    "deadLine" : "2017-05-17",
    "price" : 230.123,
    "managerId": 9,
    "clientId": 10
  }
 * @apiSuccessExample Success-Response:
 {
   "id": 1,
   "description": "first simple order",
   "deadLine": "2017-05-16T21:00:00.000Z",
   "price": "230.123",
   "managerId": 9,
   "clientId": 10,
   "updatedAt": "2017-02-13T13:45:08.710Z",
   "createdAt": "2017-02-13T13:45:08.710Z"
 }
 */
router.post('/', function (req, res) {
  if (!req.body.managerId || !req.body.clientId) {
    res.status(400).send({msg: "provide both clientId and managerId"});
    return;
  }
  models.Order.create({
    description: req.body.description,
    deadLine: moment(req.body.deadLine).toDate(),
    price: req.body.price,
    managerId: req.body.managerId,
    clientId: req.body.clientId
  })
    .then(order => {
      res.send(order);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

/**
 * @api {post} /api/orders Get full order list
 * @apiName GetOrders
 * @apiGroup Orders
 * @apiError InternalError 500
 * @apiSuccessExample Success-Response:
 * [
 {
   "id": 1,
   "description": "first simple order",
   "deadLine": "2017-05-16T21:00:00.000Z",
   "price": "230.123",
   "createdAt": "2017-02-13T13:45:08.710Z",
   "updatedAt": "2017-02-13T13:45:08.710Z",
   "managerId": 9,
   "clientId": 10,
   "client": {
     "id": 10,
     "firstName": "ivan123",
     "lastName": "talalaev",
     "createdAt": "2017-02-13T13:42:11.405Z",
     "updatedAt": "2017-02-13T13:42:11.405Z"
   },
   "manager": {
     "id": 9,
     "firstName": "ivan123",
     "lastName": "talalaev",
     "createdAt": "2017-02-13T13:42:10.808Z",
     "updatedAt": "2017-02-13T13:42:10.808Z"
   }
 }
 ]
 */
router.get('/', function (req, res) {
  models.Order.findAll({
    include: [{model: models.User, as: "client"}, {model: models.User, as: "manager"}]
  })
    .then(function (orders) {
      res.send(orders);
    });
});

/**
 * @api {post} /api/orders/:id Find order by id
 * @apiName FindOrder
 * @apiGroup Orders
 * @apiError InternalError 500
 * @apiSuccessExample Success-Response:
 {
   "id": 1,
   "description": "first simple order",
   "deadLine": "2017-05-16T21:00:00.000Z",
   "price": "230.123",
   "createdAt": "2017-02-13T13:45:08.710Z",
   "updatedAt": "2017-02-13T13:45:08.710Z",
   "managerId": 9,
   "clientId": 10,
   "client": {
     "id": 10,
     "firstName": "ivan123",
     "lastName": "talalaev",
     "createdAt": "2017-02-13T13:42:11.405Z",
     "updatedAt": "2017-02-13T13:42:11.405Z"
   },
   "manager": {
     "id": 9,
     "firstName": "ivan123",
     "lastName": "talalaev",
     "createdAt": "2017-02-13T13:42:10.808Z",
     "updatedAt": "2017-02-13T13:42:10.808Z"
   }
 }
 */
router.get('/:id', function (req, res) {
  models.Order.findOne({
    where: {id: req.params.id},
    include: [{model: models.User, as: "client"}, {model: models.User, as: "manager"}]
  })
    .then(function (orders) {
      res.send(orders);
    });
});

/**
 * @api {delete} /api/users/:id Delete order by Id
 * @apiName DeleteOrder
 * @apiParam {Number} id of the user which needs to be deleted
 * @apiGroup Orders
 * @apiError InternalError 500
 * @apiSuccessExample Success-Response:
 *  HTTP/1.1 200 OK
 */
router.delete('/:id', (req, res) => {
  models.Order.destroy({
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
 * @api {put} /api/users/:id Update order with Id
 * @apiName Update
 * @apiParam {Number} id of the user which needs to be updated
 * @apiGroup Orders
 * @apiError IncorrectOrder 400 clientId and managerId must be provided
 * @apiError InternalError 500
 * @apiSuccessExample Success-Response:
 {
   "id": 1,
   "description": "first simple order",
   "deadLine": "2017-05-16T21:00:00.000Z",
   "price": "230.123",
   "createdAt": "2017-02-13T13:45:08.710Z",
   "updatedAt": "2017-02-13T13:45:08.710Z",
   "managerId": 9,
   "clientId": 10
 }
 */
router.put('/:id', (req, res) => {
  if (!req.body.managerId || !req.body.clientId) {
    res.status(400).send({msg: "provide both clientId and managerId"});
    return;
  }
  models.Order.update({
    description: req.body.description,
    deadLine: moment(req.body.deadLine).toDate(),
    price: req.body.price,
    managerId: req.body.managerId,
    clientId: req.body.clientId
  }, {
    where: {id: req.params.id}
  })
    .then(() => {
      models.Order.findOne({
        where: {id: req.params.id}
      })
        .then(result => {
          res.send(result)
        })
    })
    .catch(err => {
      res.status(500).send(err);
    })
});


module.exports = router;