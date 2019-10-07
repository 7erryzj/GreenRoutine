/*
###################
Connection to MySql
###################
*/

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
    host     : 'localhost', // connection adress (localhost).
    user     : 'root',     // database's username.
    password : '',        // database's password.
    database : 'greenroutine'   // database's name.
  });



  const app = express();

// Creating a GET route that returns data from the 'users' table.
app.get('/site', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    connection.query('SELECT * FROM site', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});



// Starting our server.
app.listen(3000, () => {
 console.log('Go to http://localhost:3000/test so you can see the data.');
});