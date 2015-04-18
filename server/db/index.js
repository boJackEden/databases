var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'chat'
});

connection.connect();

exports.testDB = function() {
  console.log('TESTING DB');


  connection.query('SELECT * from messages', function(err, rows, fields) {
    if (!err)
      console.log('The solution is: ', rows);
    else
      console.log('Error while performing Query.');
  });


};

exports.writeMessage = function(post){

  var query = connection.query('INSERT INTO messages SET ?', post, function(err, result) {
    if (err) console.log(err);
    console.log(result);
  });
  console.log(query.sql);

};

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


