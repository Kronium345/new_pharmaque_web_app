// routes/flagged.js
import express from 'express';
import { FlaggedQuestion } from '../models/FlaggedQuestions.js';
import { Chapter } from '../models/Chapters.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

router.post('/flag', checkAuth, async (req, res) => {
  const { questionId } = req.body;
  const { userId } = req.user;

  try {
    let flaggedQuestion = await FlaggedQuestion.findOne({ questionId, userId });

    if (flaggedQuestion) {
      return res.status(400).json({ message: 'You have already flagged this question.' });
    }

    flaggedQuestion = new FlaggedQuestion({ questionId, userId });
    await flaggedQuestion.save();

    res.json({ message: 'Question flagged successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/questions/details', checkAuth, async (req, res) => {
  const { ids } = req.body;

  try {
    const questions = await Chapter.find({ 'questions._id': { $in: ids } }, { 'questions.$': 1 });
    const questionDetails = questions.flatMap(chapter => chapter.questions);
    return res.json({ status: true, questions: questionDetails });
  } catch (error) {
    console.error('Error fetching question details:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

router.get('/flagged', checkAuth, async (req, res) => {
  try {
    const flaggedQuestions = await FlaggedQuestion.find().populate('userId', 'username');
    return res.json({ status: true, questions: flaggedQuestions });
  } catch (error) {
    console.error('Error fetching flagged questions:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as FlaggedRouter };
