var models = require('../models');
var bluebird = require('bluebird');
var db = require('../db');



module.exports = {
  messages: {
    get: function (req, res) {
      db.readMessages(function(messages) {
        var mappedMessages = messages.map(function(message){
          return {username: message.user_name,
                  roomname: message.room_name,
                  text: message.text
                };
        });
        console.log('MESSAGES===',mappedMessages);
        res.writeHead(201);
        res.end(JSON.stringify(mappedMessages));

      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      db.writeMessage({user_name: req.body.username, room_name: req.body.roomname, text: req.body.message});
      res.writeHead(201);
      res.end();
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      res.writeHead(201);
      res.end();
    }
  }
};



