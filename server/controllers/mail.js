'use strict'
var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
module.exports = {

    send: (email, message, cb, cb1) => {
        console.log(message);
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'segcaucaltda@gmail.com',
                pass: 'Segcauca2580*'
            }
        });
        const mailOptions = {
            from: 'segcaucaltda@gmail.com',
            to: email,
            subject: 'Su registro ha sido exitoso',
            text: 'Saludos...',
            html: message
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                //cb(error);
            } else {
                cb1("ok");
            }
        });
    }

}