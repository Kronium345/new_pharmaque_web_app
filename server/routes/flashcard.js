import { FlashCard } from "../models/FlashCard.js";
import express from "express";
import { QUESTIONS_DATA } from "../questions.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const isExist = await FlashCard.findOne({
      name: QUESTIONS_DATA.name,
    });

    if (isExist) {
      return res.json({
        status: false,
        message: "FlashCard already exists",
      });
    }

    const questions = QUESTIONS_DATA.questions;
    let ques = [];
    for (const question of questions) {
      const answers = question.options;
      let ans = [];
      for (const answer of answers) {
        ans.push({ text: answer, isCorrect: answer === question.answer });
      }
      ques.push({
        question: question.question,
        answers: ans,
        explanation: "No Explanantion",
      });
    }

    const flashCard = new FlashCard({
      name: QUESTIONS_DATA.name,
      image: QUESTIONS_DATA.image,
      questions: ques,
    });

    await flashCard.save();

    return res.json({
      status: true,
      message: "Flash Card created successfully",
    });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const flashCards = await FlashCard.find({}, { questions: 0 });
    return res.json({ status: true, flashCards });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

router.delete("/:flashCardId", async (req, res) => {
  try {
    const { flashCardId } = req.params;
    const flashCard = await FlashCard.findByIdAndDelete(flashCardId);
    return res.json({ status: true, flashCard });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

export { router as FlashRouter };
