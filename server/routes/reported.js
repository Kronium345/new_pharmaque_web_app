import express from 'express';
import { ReportedQuestion } from '../models/ReportQuestions.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/report', checkAuth, async (req, res) => {
  const { questionId, reason } = req.body;
  const { userId } = req.user;

  try {
    let reportedQuestion = await ReportedQuestion.findOne({ questionId, userId });

    if (reportedQuestion) {
      return res.status(400).json({ message: 'You have already reported this question.' });
    }

    reportedQuestion = new ReportedQuestion({ questionId, userId, reason });
    await reportedQuestion.save();

    res.json({ message: 'Question reported successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export { router as ReportedRouter };
