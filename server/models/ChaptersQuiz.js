import mongoose from "mongoose";

const CQuizSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter" },
    attemptedQuestions: { type: Number, default: 0 },
    correctAnswers: { type: Number, default: 0 },
    wrongAnswers: { type: Number, default: 0 },
    questions: [{
      question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
      status: { type: String, default: '' },  // Added status field
      flaggedOn: { type: Date }
    }],
    reportedQuestions: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    skippedQuestions: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const CQuizModel = mongoose.model("CQuiz", CQuizSchema);

export { CQuizModel as CQuiz };
