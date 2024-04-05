import { Chapter } from "../models/Chapters.js";
import express from "express";
import { QUESTIONS_DATA } from "../questions.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const chapters = await Chapter.find({}, { questions: 0 });
    return res.json({ status: true, chapters });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

export { router as ChapterRouter };
