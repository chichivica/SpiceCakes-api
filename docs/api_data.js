define({ "api": [
  {
    "type": "post",
    "url": "/api/orders",
    "title": "Create new order",
    "name": "CreateOrder",
    "group": "Orders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectOrder",
            "description": "<p>400 clientId and managerId must be provided</p>"
          }
        ]
      }
    },
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"description\" : \"first simple order\",\n    \"deadLine\" : \"2017-05-17\",\n    \"price\" : 230.123,\n    \"managerId\": 9,\n    \"clientId\": 10\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 1,\n  \"description\": \"first simple order\",\n  \"deadLine\": \"2017-05-16T21:00:00.000Z\",\n  \"price\": \"230.123\",\n  \"managerId\": 9,\n  \"clientId\": 10,\n  \"updatedAt\": \"2017-02-13T13:45:08.710Z\",\n  \"createdAt\": \"2017-02-13T13:45:08.710Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete order by Id",
    "name": "DeleteOrder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the user which needs to be deleted</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/api/orders/:id",
    "title": "Find order by id",
    "name": "FindOrder",
    "group": "Orders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 1,\n  \"description\": \"first simple order\",\n  \"deadLine\": \"2017-05-16T21:00:00.000Z\",\n  \"price\": \"230.123\",\n  \"createdAt\": \"2017-02-13T13:45:08.710Z\",\n  \"updatedAt\": \"2017-02-13T13:45:08.710Z\",\n  \"managerId\": 9,\n  \"clientId\": 10,\n  \"client\": {\n    \"id\": 10,\n    \"firstName\": \"ivan123\",\n    \"lastName\": \"talalaev\",\n    \"createdAt\": \"2017-02-13T13:42:11.405Z\",\n    \"updatedAt\": \"2017-02-13T13:42:11.405Z\"\n  },\n  \"manager\": {\n    \"id\": 9,\n    \"firstName\": \"ivan123\",\n    \"lastName\": \"talalaev\",\n    \"createdAt\": \"2017-02-13T13:42:10.808Z\",\n    \"updatedAt\": \"2017-02-13T13:42:10.808Z\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/api/orders",
    "title": "Get full order list",
    "name": "GetOrders",
    "group": "Orders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n {\n   \"id\": 1,\n   \"description\": \"first simple order\",\n   \"deadLine\": \"2017-05-16T21:00:00.000Z\",\n   \"price\": \"230.123\",\n   \"createdAt\": \"2017-02-13T13:45:08.710Z\",\n   \"updatedAt\": \"2017-02-13T13:45:08.710Z\",\n   \"managerId\": 9,\n   \"clientId\": 10,\n   \"client\": {\n     \"id\": 10,\n     \"firstName\": \"ivan123\",\n     \"lastName\": \"talalaev\",\n     \"createdAt\": \"2017-02-13T13:42:11.405Z\",\n     \"updatedAt\": \"2017-02-13T13:42:11.405Z\"\n   },\n   \"manager\": {\n     \"id\": 9,\n     \"firstName\": \"ivan123\",\n     \"lastName\": \"talalaev\",\n     \"createdAt\": \"2017-02-13T13:42:10.808Z\",\n     \"updatedAt\": \"2017-02-13T13:42:10.808Z\"\n   }\n }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "put",
    "url": "/api/users/:id",
    "title": "Update order with Id",
    "name": "Update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the user which needs to be updated</p>"
          }
        ]
      }
    },
    "group": "Orders",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "IncorrectOrder",
            "description": "<p>400 clientId and managerId must be provided</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "InternalError",
            "description": "<p>500</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"id\": 1,\n  \"description\": \"first simple order\",\n  \"deadLine\": \"2017-05-16T21:00:00.000Z\",\n  \"price\": \"230.123\",\n  \"createdAt\": \"2017-02-13T13:45:08.710Z\",\n  \"updatedAt\": \"2017-02-13T13:45:08.710Z\",\n  \"managerId\": 9,\n  \"clientId\": 10\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/orders.js",
    "groupTitle": "Orders"
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "Create new user",
    "name": "CreateUser",
    "group": "Users",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n   \"firstName\" : \"John\",\n   \"lastName\" : \"Normand\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"id\": 8,\n \"firstName\": \"John\",\n \"lastName\": \"Normand\",\n \"updatedAt\": \"2017-02-13T12:28:09.083Z\",\n \"createdAt\": \"2017-02-13T12:28:09.083Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "delete",
    "url": "/api/users/:id",
    "title": "Delete user by Id",
    "name": "DeleteUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the user which needs to be deleted</p>"
          }
        ]
      }
    },
    "group": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "post",
    "url": "/api/users/:id",
    "title": "Create new user",
    "name": "FindUser",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the user to find with</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"id\": 8,\n \"firstName\": \"John\",\n \"lastName\": \"Normand\",\n \"updatedAt\": \"2017-02-13T12:28:09.083Z\",\n \"createdAt\": \"2017-02-13T12:28:09.083Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "Get full list of users",
    "name": "GetUsers",
    "group": "Users",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "500",
            "description": "<p>Internal error</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\n  {\n     \"id\": 8,\n     \"firstName\": \"John\",\n     \"lastName\": \"Normand\",\n     \"updatedAt\": \"2017-02-13T12:28:09.083Z\",\n     \"createdAt\": \"2017-02-13T12:28:09.083Z\"\n },\n {\n     \"id\": 8,\n     \"firstName\": \"John\",\n     \"lastName\": \"Normand\",\n     \"updatedAt\": \"2017-02-13T12:28:09.083Z\",\n     \"createdAt\": \"2017-02-13T12:28:09.083Z\"\n }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users"
  }
] });
