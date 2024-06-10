import mongoose from 'mongoose';
import { Chapter } from './Chapters.js'; // Import the Chapter model

const ReportedQuestionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chapter', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  count: { type: Number, default: 1 },
  status: { type: String, default: 'unread' } // Add status field
});

const ReportedQuestion = mongoose.model('ReportedQuestion', ReportedQuestionSchema);

export { ReportedQuestion };
