import nodemailer from 'nodemailer';

export default function sendEmail({
  name,
  message,
  email,
}: {
  name: string;
  message: string;
  email: string;
}) {
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Portfolio Inquiry',
    text: `
Name: ${name}
Email: ${email}
Message:

${message}`,
  };

  return transporter.sendMail(mailOptions);
}
