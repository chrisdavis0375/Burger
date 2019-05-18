// IMPORT CONNECTION TO DATABASE
var connection = require('./connection.js');


// Methods for selecting all queries, inserting new ones, and updating current queries
var orm = {
    selectAll: function() {
        var query = "SELECT * FROM burger";
        connection.query(query, function(err, results) {
            if(err) {
                console.log(err);
            }
            console.log(results);
        })
    },
    insertOne: function(newName) {
        var query = "INSERT INTO burger(burger_name) VALUES(?)";
        connection.query(query, [newName], function(err, results) {
            if(err) {
                console.log(err);
            }
            console.log(results);
        })
    },
    updateOne: function(whichBurger, isDevoured) {
        var query = "UPDATE ?? FROM burger SET ??";
        connection.query(query, [whichBurger, isDevoured], function(err, results) {
            if(err) {
                console.log(err);
            }
            console.log(results);
        })
    }
}
//FIX SYNTAX LATER
//orm.updateOne("Cheeseburger", true);

// Exporting orm to be used in other files
module.exports = orm;