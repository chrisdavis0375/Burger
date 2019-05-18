// DEPENDENCIES
var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();


// Default route
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var object = {
            burgers: data
        }
        console.log(object);
        res.render("index", object);
    })
})



router.post("/", function(req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    })
})


router.put("/:id", function(req, res) {
    var id = req.params.id;

    console.log("id", id);

    burger.updateOne(id, function() {
        res.redirect("/");
    })
})

// Exports router
module.exports = router;