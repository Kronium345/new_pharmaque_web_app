import express from 'express';
import { ReportedQuestion } from '../models/ReportQuestions.js';
import { Chapter } from '../models/Chapters.js';
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

router.get('/reported', checkAuth, async (req, res) => {
  try {
    const reportedQuestions = await ReportedQuestion.find().populate('userId', 'username');
    const questionIds = reportedQuestions.map(q => q.questionId);
    const questions = await Chapter.find({ 'questions._id': { $in: questionIds } }, { 'questions.$': 1 });
    const questionDetails = questions.flatMap(chapter => chapter.questions);

    const reportedQuestionsWithDetails = reportedQuestions.map(reported => {
      const questionDetail = questionDetails.find(q => q._id.equals(reported.questionId));
      return {
        ...reported._doc,
        questionDetail: questionDetail ? questionDetail.question : 'Question not found',
      };
    });

    return res.json({ status: true, questions: reportedQuestionsWithDetails });
  } catch (error) {
    console.error('Error fetching reported questions:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

router.post('/mark-as-read', checkAuth, async (req, res) => {
  const { ids } = req.body;

  try {
    await ReportedQuestion.updateMany(
      { _id: { $in: ids } },
      { $set: { status: 'read' } }
    );

    return res.json({ status: true, message: 'Marked as read' });
  } catch (error) {
    console.error('Error marking as read:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

router.post('/mark-as-unread', checkAuth, async (req, res) => {
  const { ids } = req.body;

  try {
    await ReportedQuestion.updateMany(
      { _id: { $in: ids } },
      { $set: { status: 'unread' } }
    );

    return res.json({ status: true, message: 'Marked as unread' });
  } catch (error) {
    console.error('Error marking as unread:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as ReportedRouter };
