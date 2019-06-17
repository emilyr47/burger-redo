var express = require("express");

var router = express.Router();

// model import:
var burger = require("../models/burger.js");


router.post("/", function(request, response) {
  burger.create([
    "burger_name", "devoured"
  ], [
    request.body.burger_name, request.body.devoured
  ], function(result) {
    // new burger id is sent back so that it can display:
    
    response.json({ id: result.insertId });
  });
});

router.put("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: request.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

router.delete("/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

module.exports = router;
