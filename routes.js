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
  app.get('/site/:plastic/:paper/:alum/:ddl', function (req, res) {
      connection.getConnection(function (err, connection) {
      var query ="SELECT site.* FROM site ";
      if(req.params.plastic == 'true'){
        query += 'INNER JOIN recyclables AS b ON site.SiteId= b.SiteId and b.Name = "Plastic" '
      }
      if(req.params.paper == 'true'){
        query += 'INNER JOIN recyclables AS a ON site.SiteId= a.SiteId and a.Name = "Paper"'
      }
      if(req.params.alum == 'true'){
        query += 'INNER JOIN recyclables AS c ON site.SiteId= c.SiteId and c.Name = "Aluminium" '
      }
      if(req.params.ddl != 'Show All'){
        query += 'WHERE site.StreetName LIKE "'+req.params.ddl+'%"'
      }
      connection.query(query, function (error, results, fields) {
      //connection.query('SELECT site.*, recyclables.* FROM site INNER JOIN recyclables ON site.SiteId = recyclables.SiteId', function (error, results, fields) {
        connection.release();
        if (error) throw error;

        res.send(results)
      });
    });
  });

  //Get rates
  app.get('/recyclables/:sid', function (req, res) {
    const sid = req.params.sid
    connection.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'site' table).
    connection.query('SELECT * FROM recyclables WHERE SiteId = ? ',sid, function (error, results, fields) {
      connection.release();
      if (error) throw error;

      res.send(results)
    });
  });
});

//Message per user
app.get('/message/:uid', function (req, res) {

  const uid = req.params.uid
  connection.getConnection(function (err, connection) {
  connection.query('SELECT message.uid, message.sid, message.title, message.content, message.reply, site.StreetName FROM message INNER JOIN site ON message.sid = site.SiteId WHERE uid = ?',uid, function (error, results, fields) {
    connection.release();
    if (error) throw error;

    res.send(results)
  });
});
});

//Login
app.get('/user/:username/:password', function (req, res) {

  //const userId = req.params.id
  const userName = req.params.username
  const passWord = req.params.password
  connection.getConnection(function (err, connection) {
  connection.query('SELECT * FROM user WHERE username = ? AND password = ?', [userName, passWord], function (error, results, fields) {
    connection.release();
    if (error)
    console.log(error);

    res.send(results)
  });
});
});

app.get('/user/:username', function (req, res) {
  const username = req.params.username
  connection.getConnection(function (err, connection) {

  connection.query('SELECT * FROM users WHERE username = ? ', username, function (error, results, fields) {
    connection.release();
    if (error)
    console.log(error);
    res.send(results);
    console.log(results);
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
      connection.release();
      if (error)
      console.log(error);
  
      res.send(results)
    });
  })
});

//Send Message
app.post('/newMessage', function(req, res, next){
  var data = {
    title : req.body.title,
    content: req.body.content,
    uid: req.body.uid,
    sid : req.body.sid
  }
  connection.getConnection(function(err, connection){
    connection.query('INSERT INTO message SET ?', data, function (error, results) {
      connection.release();
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