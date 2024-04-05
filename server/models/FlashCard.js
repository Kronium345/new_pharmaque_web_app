import mongoose from "mongoose";

const FlashCardSchema = new mongoose.Schema(
  {
    name: { type: String },
    image: { type: String },
    questions: [
      {
        question: {
          type: String,
        },
        answers: [
          {
            text: { type: String },
            isCorrect: { type: Boolean },
          },
        ],
        explanation: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const FlashCardModel = mongoose.model("FlashCard", FlashCardSchema);

export { FlashCardModel as FlashCard };
