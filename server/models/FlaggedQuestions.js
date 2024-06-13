// models/FlaggedQuestions.js
import mongoose from 'mongoose';

const FlaggedQuestionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter.questions', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  timestamp: { type: Date, default: Date.now },
});

const FlaggedQuestion = mongoose.model('FlaggedQuestion', FlaggedQuestionSchema);

export { FlaggedQuestion };
