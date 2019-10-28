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


  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
// Creating a GET route that returns data from the 'site' table.
  app.get('/site', function (req, res) {
      // Connecting to the database.
      connection.getConnection(function (err, connection) {

      // Executing the MySQL query (select all data from the 'site' table).
      connection.query('SELECT * FROM site', function (error, results, fields) {
        if (error) throw error;

        res.send(results)
      });
    });
  });

  app.get('/recyclable', function (req, res) {
    // Connecting to the database.
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'site' table).
    connection.query('SELECT * FROM recyclable', function (error, results, fields) {
      if (error) throw error;

      res.send(results)
    });
  });
});

//Message per user
app.get('/message/:uid', function (req, res) {

  const uid = req.params.uid
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM message WHERE uid = ?',uid, function (error, results, fields) {
    if (error) throw error;

    res.send(results)
  });
});
});

/*
app.post('/deleteMessage', function(req, res, next){
  var data = {
    id: req.body.id
  }
  connection.getConnection(function(err, connection){
    connection.query('DELETE FROM message WHERE id = ?', data, function (error, results) {
      if (error)
      console.log(error);
  
      res.send(results)
    });
  })
});
*/

//Login
app.get('/user/:username/:password', function (req, res) {

  //const userId = req.params.id
  const userName = req.params.username
  const passWord = req.params.password
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [userName, passWord], function (error, results, fields) {
    if (error)
    console.log(error);

    res.send(results)
  });
});
});

//register 
app.post('/newUser', function(req, res, next){
  // Creating our connection.

  var data = {
    username: req.body.username,
    password: req.body.password
  }
  connection.getConnection(function(err, connection){
    connection.query('INSERT INTO user SET ?', data, function (error, results) {
      if (error)
      console.log(error);
  
      res.send(results)
    });
  })
});

app.post('/newMessage', function(req, res, next){
  // Creating our connection.

  var data = {
    title : req.body.title,
    content: req.body.content,
    uid: req.body.uid,
    sid : req.body.sid
  }
  connection.getConnection(function(err, connection){
    connection.query('INSERT INTO message SET ?', data, function (error, results) {
      if (error)
      console.log(error);
  
      res.send(results)
    });
  })
});

// Starting our server.
app.listen(3000, () => {
 console.log('Connected!');
});