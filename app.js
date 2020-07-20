const express = require("express");
const bodyParser = require("body-parser");

var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

var date = new Date();
var list = [];

var options = { weekday: "long", day: "numeric", month: "long" };

var day = date.toLocaleDateString("en-US", options);

app.get("/", function (req, res) {
  res.render("index", { today: day , itemList: list });
});


app.post("/", function(req,res){
    list.push(req.body.item);
    res.redirect("/");
})

app.listen(3000, function () {
  console.log("App Running on port 3000");
});
