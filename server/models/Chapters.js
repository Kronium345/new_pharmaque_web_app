import mongoose from "mongoose";

const ChapterSchema = new mongoose.Schema(
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
        bnf_link: { type: String }
      },
    ],
  },
  {
    timestamps: true,
  }
);

const ChapterModel = mongoose.model("Chapter", ChapterSchema);

export { ChapterModel as Chapter };
