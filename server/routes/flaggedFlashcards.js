// routes/flaggedFlashcards.js
import express from 'express';
import { FlaggedFlashcard } from '../models/FlaggedFlashcards.js';
import { FlashCard } from '../models/FlashCard.js';
import checkAuth from '../middleware/checkAuth.js';

const router = express.Router();

// Flag a flashcard
router.post('/flag', checkAuth, async (req, res) => {
  const { flashcardId } = req.body;
  const { userId } = req.user;

  try {
    let flaggedFlashcard = await FlaggedFlashcard.findOne({ flashcardId, userId });

    if (flaggedFlashcard) {
      return res.status(400).json({ message: 'You have already flagged this flashcard.' });
    }

    flaggedFlashcard = new FlaggedFlashcard({ flashcardId, userId });
    await flaggedFlashcard.save();

    res.json({ message: 'Flashcard flagged successfully.' });
  } catch (error) {
    console.error('Error flagging flashcard:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get flagged flashcards details
router.post('/flashcards/details', checkAuth, async (req, res) => {
  const { ids } = req.body;

  try {
    const flashcards = await FlashCard.find({ 'questions._id': { $in: ids } }, { 'questions.$': 1 });
    const flashcardDetails = flashcards.flatMap(flashcard => flashcard.questions);
    return res.json({ status: true, flashcards: flashcardDetails });
  } catch (error) {
    console.error('Error fetching flashcard details:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

// Get all flagged flashcards by user
router.get('/flagged', checkAuth, async (req, res) => {
  const { userId } = req.user;

  try {
    const flaggedFlashcards = await FlaggedFlashcard.find({ userId }).populate('userId', 'username');
    return res.json({ status: true, flashcards: flaggedFlashcards });
  } catch (error) {
    console.error('Error fetching flagged flashcards:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

// Delete flagged flashcards
router.post('/delete', checkAuth, async (req, res) => {
  const { ids } = req.body;
  const { userId } = req.user;

  try {
    await FlaggedFlashcard.deleteMany({ _id: { $in: ids }, userId });

    return res.json({ status: true, message: 'Deleted successfully' });
  } catch (error) {
    console.error('Error deleting flagged flashcards:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as FlaggedFlashcardRouter };
