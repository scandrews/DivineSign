
const nodemailer = require('nodemailer');

var testUser = {
    name: "test user",
    email: '',
    sign: {
        horoscope: "test horoscope"
    }
}

function sendEmail = {

'use strict';


nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account');
        console.error(err);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');


    let transporter = nodemailer.createTransport(
        {
            host: account.smtp.host,
            port: account.smtp.port,
            secure: account.smtp.secure,
            auth: {
                user: account.user,
                pass: account.pass
            },
            logger: false,
            debug: false // include SMTP traffic in the logs
        },
        {

            // sender info
            from: 'astrologyMatch <no-reply@astrologyMatch.net>',
            headers: {
                'horoscope Matches': 1 
            }
        }
    );

    // Message object
    let message = {
        // Comma separated list of recipients
        to: user.email,

        // Subject of the message
        subject: 'we have astrology matches for you',

        // plaintext body
        text: user.sign.horoscope,

        // HTML body
        html:
            '<p><b>Hello</b>' +  user.name  + '</p>' +
            '<p>Here\'s all of your saved horoscopes' + newReading.data.description +  '</p>',
       
    };
    transporter.sendMail(message, (error, info) => {
        if (error) {
            console.log('Error occurred');
            console.log(error.message);
            return process.exit(1);
        }

        console.log('Message sent successfully!');
        console.log(nodemailer.getTestMessageUrl(info));
        transporter.close();
    });
});

};

module.exports = sendEmail;