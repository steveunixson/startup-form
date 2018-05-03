const log = require('../libs/log')(module); 
const mongoose = require('mongoose');
const User = require('../models/user');
const sendmail = require('sendmail')({
    logger: {
      debug: console.log,
      info: console.info,
      warn: console.warn,
      error: console.error
    }
  });

exports.createUser = function (req, res) {

    var nick = new User({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        about: req.body.about
      });
      nick.save(function (err) {
        if (!err) {
            log.info("user created");
            sendEmail(req, res);
            res.send('OK')
        } else {
            console.log(err);
          }
        });

}

function sendEmail(req, res){

    sendmail({
        from: 'no-reply@steveunixson.github.io',
        to: 'unixson@gmail.com',
        subject: 'Отклик на стартап',
        html: req.body.name + '' + req.body.email + '' + req.body.number + '' + req.body.about,
      }, function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
    });

}