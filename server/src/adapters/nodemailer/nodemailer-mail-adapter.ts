import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0d0f7108d5d3fc",
    pass: "09e310ecb31a9a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
          await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Marlon Chiodelli <marlonchiodelli@hotmail.com>',
        subject,
        html: body,
    });
    }
}