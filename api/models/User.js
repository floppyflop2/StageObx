/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
*/
var mysql = require('mysql');

module.exports = {
  attributes: {
    DATABASE_URL = "blblblbl"
  }
};


var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = function get(id){
  mysql.connect(process.env.DATABASE_URL, function(err, client, done) {
    var query = "SELECT * FROM contacts WHERE id = ? "
    client.query( query, id , function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { return  {results: result.rows} }
    });
  });
}

module.exports =  function getAll(results){
  mysql.connect(process.env.DATABASE_URL, function(err, client, done) {
    var query = "SELECT * FROM contacts"
    client.query(query, function(err, result) {
      done();
      if (err)
      { console.error(err); response.send("Error " + err); }
      else
      { return  {results: result.rows} }
    });
  });
}

module.exports =  function createStage(num_contact, name,surname,email,telephone){
  var query = "INSERT INTO customers (num_contact, name,surname,email,telephone) VALUES ?";
  var values =  [ ['bob', 'bob 50']];
  con.query(queryn, values, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}

