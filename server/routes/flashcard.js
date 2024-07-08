import { FlashCard } from "../models/FlashCard.js";
import express from "express";
import { QUESTIONS_DATA } from "../data/flash.js";
import checkAuth from "../middleware/checkAuth.js";

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
        explanation: "No Explanation",
        difficulty: 'easy', // Set default difficulty
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

router.get('/hard', checkAuth, async (req, res) => {
  try {
    const flashCards = await FlashCard.find({ "questions.difficulty": "hard" });
    const hardQuestions = flashCards.flatMap(flashCard =>
      flashCard.questions.filter(question => question.difficulty === 'hard')
    );
    return res.json({ status: true, questions: hardQuestions });
  } catch (err) {
    console.error('Error fetching hard questions:', err);
    return res.json({ status: false, message: "Something went wrong" });
  }
});


export { router as FlashRouter };
