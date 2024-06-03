import mongoose from 'mongoose';

const ReportedQuestionSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reason: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  count: { type: Number, default: 1 },
});

const ReportedQuestionModel = mongoose.model('ReportedQuestion', ReportedQuestionSchema);

export { ReportedQuestionModel as ReportedQuestion };
