import express from 'express';
import nodemailer from 'nodemailer';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/send-email', checkAuth, async (req, res) => {
  const { email, content } = req.body;

  // Create a transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password'
    }
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'pharmaque23@gmail.com',
    subject: 'Reported Question',
    text: `Email: ${email}\nContent: ${content}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

export { router as EmailRouter };
