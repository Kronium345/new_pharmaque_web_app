import { FlashCard } from "../models/FlashCard.js";
import express from "express";
import { QUESTIONS_DATA } from "../questions.js";

const router = express.Router();

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

export { router as FlashRouter };
