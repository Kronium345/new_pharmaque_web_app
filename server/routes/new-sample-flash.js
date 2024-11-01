import { FlashCard } from "../models/FlashCard.js";
import express from "express";
import { UPDATED_SAMPLE_FLASH_DATA } from "../data/updated-sample-flash.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const isExist = await FlashCard.findOne({
      name: UPDATED_SAMPLE_FLASH_DATA.name,
    });

    if (isExist) {
      return res.json({
        status: false,
        message: "Flashcard set already exists",
      });
    }

    const questions = UPDATED_SAMPLE_FLASH_DATA.questions;
    let ques = [];
    for (const question of questions) {
      const answers = question.answers;
      let ans = [];
      for (const answer of answers) {
        ans.push({ text: answer.text, isCorrect: answer.isCorrect || false });
      }
      ques.push({
        question: question.question,
        answers: ans,
        explanation: question.explanation,
        difficulty: 'easy', // Set default difficulty
      });
    }

    const flashCard = new FlashCard({
      name: UPDATED_SAMPLE_FLASH_DATA.name,
      image: UPDATED_SAMPLE_FLASH_DATA.image,
      questions: ques,
    });

    await flashCard.save();

    return res.json({
      status: true,
      message: "Flash Card created successfully",
    });
  } catch (err) {
    console.error("Error creating flashcard set:", err); // Log the actual error
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

router.post('/mark-difficulty', checkAuth, async (req, res) => {
  const { questionId, difficulty } = req.body;
  
  try {
    const flashCard = await FlashCard.findOne({ "questions._id": questionId });
    if (flashCard) {
      const question = flashCard.questions.id(questionId);
      question.difficulty = difficulty;
      await flashCard.save();
      return res.json({ status: true, message: `Marked as ${difficulty}` });
    } else {
      return res.json({ status: false, message: 'Question not found' });
    }
  } catch (error) {
    console.error('Error marking difficulty:', error);
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as NewSampleFlashRouter };
