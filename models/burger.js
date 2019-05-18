// IMPORTS ORM
var orm = require("../config/orm.js");

var burger = {
    selectAll: function() {
        orm.selectAll(function(results) {
            return results;
        })
    },
    insertOne: function(burger) {
        orm.insertOne(burger, function(results) {
            return results;
        })
    },
    updateOne: function(whichBurger, isDevoured) {
        orm.updateOne([whichBurger, isDevoured], function(results) {
            return results;
        })
    }
}

// Exports burger
module.exports = burger;