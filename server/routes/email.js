import express from 'express';
import nodemailer from 'nodemailer';
import checkAuth from '../middleware/checkAuth.js';
import { User } from '../models/User.js';

const router = express.Router();

router.post('/send-email', checkAuth, async (req, res) => {
  const { content } = req.body;
  const { userId } = req.user; // Retrieve the user ID from the authenticated user

  try {
    // Fetch the user's email and password from the database
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const { email, password } = user;

    // Create a transporter object using the user's email credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other email services as well
      auth: {
        user: email,
        pass: password // Directly use the user's password from the database
      }
    });

    const mailOptions = {
      from: email,
      to: 'pharmaque23@gmail.com',
      subject: 'Reported Question',
      text: `Email: ${email}\nContent: ${content}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email', error });
  }
});

export { router as EmailRouter };
