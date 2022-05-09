import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f2935d923986d9",
    pass: "69e1deb6152be5"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <support@feedget.com>",
      to: "José Gabriel <j.gabriel.ct47@gmail.com>",
      subject,
      html: body
    })
  };
}