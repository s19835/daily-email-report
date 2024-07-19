import { config } from "dotenv";
import nodemailer from "nodemailer";

config();

// Email configurations, create transporter
const transporter = nodemailer.createTransport(
    {
        host: 'smtp.gmail.com',
        port: 587, 
        secure: false,
        auth: {
            user: process.env.MAILID,
            pass: process.env.PASSWORD
        }
    }
)