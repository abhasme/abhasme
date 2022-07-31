async function sendEmail(email, subject, text) {
    try {
      const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        service: process.env.MAIL_SERVICE,
        port: +process.env.MAIL_PORT,
        secure: Boolean(process.env.MAIL_IS_SECURE),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      });
  
      await transporter.sendMail({
        from: 'ShadiMasters <zwsdemo@gmail.com>',
        to: email,
        subject,
        // text,
        html: text,
      });
  
      console.log('Email sent successfully.');
    } catch (error) {
      console.log(error, 'Email not sent.');
    }
  }
async function sendEmail(email, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      service: process.env.MAIL_SERVICE,
      port: +process.env.MAIL_PORT,
      secure: Boolean(process.env.MAIL_IS_SECURE),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: 'ShadiMasters <zwsdemo@gmail.com>',
      to: email,
      subject,
      // text,
      html: text,
    });

    console.log('Email sent successfully.');
  } catch (error) {
    console.log(error, 'Email not sent.');
  }
}
  