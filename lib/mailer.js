var nodemailer = require('nodemailer');
var Q = require('q');

var Mailer = function () {

    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    });
     
    this.send = function (email) {
        var defer = Q.defer();
        transporter.sendMail(email, function (error, info) {
            if (error) {
                defer.reject(error);
            } else {
                defer.resolve(info);
            }
        });
        return defer.promise;
    };
};

module.exports = Mailer;