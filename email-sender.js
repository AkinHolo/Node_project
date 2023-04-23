// task 5

// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this


// importing require modules
const nodemailer = require('nodemailer');


// creating a transporter for sending mail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});

// email message details
const mailOptions = {
    from: '',
    to: '',
    subject: 'Testing Email from Node.js',
    text: 'Hello, hope you recieve this mail sent from node.js'

};

// sending mail
transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
        console.log("mail did not deliver:", error);
    } else {
        console.log('Email sent successfully:', info.res);
    }
});
