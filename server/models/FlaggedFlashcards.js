// models/FlaggedFlashcards.js
import mongoose from 'mongoose';

const FlaggedFlashcardSchema = new mongoose.Schema({
  flashcardId: { type: mongoose.Schema.Types.ObjectId, ref: 'FlashCard.questions', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
});

const FlaggedFlashcard = mongoose.model('FlaggedFlashcard', FlaggedFlashcardSchema);

export { FlaggedFlashcard };
