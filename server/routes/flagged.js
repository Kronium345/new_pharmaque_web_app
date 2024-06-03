import express from 'express';
import { FlaggedQuestion } from '../models/FlaggedQuestions.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/flag', checkAuth, async (req, res) => {
  const { questionId, reason } = req.body;
  const { userId } = req.user;

  try {
    let flaggedQuestion = await FlaggedQuestion.findOne({ questionId, userId });

    if (flaggedQuestion) {
      return res.status(400).json({ message: 'You have already flagged this question.' });
    }

    flaggedQuestion = new FlaggedQuestion({ questionId, userId, reason });
    await flaggedQuestion.save();

    res.json({ message: 'Question flagged successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Endpoint to get all flagged questions
router.get('/flagged', checkAuth, async (req, res) => {
  try {
    const flaggedQuestions = await FlaggedQuestion.find();
    return res.json({ status: true, questions: flaggedQuestions });
  } catch (error) {
    console.error('Error fetching flagged questions:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as FlaggedRouter };
