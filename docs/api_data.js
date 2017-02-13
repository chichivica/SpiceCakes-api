define({ "api": [
  {
    "type": "post",
    "url": "/api/users",
    "title": "create new user",
    "name": "CreateUser",
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
    "url": "/api/users/:userId",
    "title": "Delete user by Id",
    "name": "DeleteUser",
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
