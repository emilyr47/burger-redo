var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Import routes:
var burgersController = require("./controllers/burgers_controller.js");


var burger = require("./models/burger.js");

var port = process.env.PORT || 3004;

var app = express();


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// handlebars:
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(request, response) {
    burger.showAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      response.render("index", hbsObject);
    });
  });

app.use("/api/burgers", burgersController);

app.listen(port);
