import { FlashCard } from "../models/FlashCard.js";
import express from "express";
import { SAMPLE_FLASH_DATA } from "../data/sample-flash.js";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const isExist = await FlashCard.findOne({
      name: SAMPLE_FLASH_DATA.name,
    });

    if (isExist) {
      return res.json({
        status: false,
        message: "Flashcard set already exists",
      });
    }

    const questions = SAMPLE_FLASH_DATA.questions;
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
        explanation: "No Explanation",
        difficulty: 'easy', // Set default difficulty
      });
    }

    const flashCard = new FlashCard({
      name: SAMPLE_FLASH_DATA.name,
      image: SAMPLE_FLASH_DATA.image,
      questions: ques,
    });

    await flashCard.save();

    return res.json({
      status: true,
      message: "Flash Card created successfully",
    });
  } catch (err) {
    console.error("Error creating flashcard set:", err); // Detailed error logging
    return res.status(500).json({
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
    console.error("Error fetching flashcards:", err); // Detailed error logging
    return res.status(500).json({
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
    console.error('Error marking difficulty:', error); // Detailed error logging
    return res.status(500).json({ status: false, error: 'Internal server error' });
  }
});

export { router as SampleFlashRouter };
