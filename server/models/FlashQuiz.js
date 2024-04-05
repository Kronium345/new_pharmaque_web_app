import mongoose from "mongoose";

const FQuizSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    flash: { type: mongoose.Schema.Types.ObjectId, ref: "FlashCard" },
    attemptedQuestions: { type: Number, default: 0 },
    correctAnswers: { type: Number, default: 0 },
    wrongAnswers: { type: Number, default: 0 },
    flaggedQuestions: { type: Number, default: 0 },
    reportedQuestions: { type: Number, default: 0 },
    totalQuestions: { type: Number, default: 0 },
    skippedQuestions: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const FQuizModel = mongoose.model("FQuiz", FQuizSchema);

export { FQuizModel as FQuiz };
