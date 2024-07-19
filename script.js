import { config } from "dotenv";
import nodemailer from "nodemailer";
import path from "path";

config();

// Email configurations, create transporter
const transporter = nodemailer.createTransport(
    {
        host: process.env.HOST, 
        port: 2525, 
        auth: {
            user: process.env.USERNAME, // host user name - mailtrap
            pass: process.env.PASSWORD // host password - mailtrap
        }
    }
);

// chosse the file to sent
const filename = 'daily-report.pdf'

const maileOptions = {
    from: process.env.MAILID,
    to: process.env.RECIVER,
    subject: 'Daily Report',
    text: 'Please find the attached daily report',
    attachments: [
        {
            filename: filename,
            path: path.join('./attachments', filename)
        }
    ]
}

// sent email to 
transporter.sendMail(maileOptions, (error, info) => {
    if (error) throw new Error(error);
    else console.log('Email sent: ', info.response);
});