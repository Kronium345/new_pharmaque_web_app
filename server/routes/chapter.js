import { Chapter } from "../models/Chapters.js";
import express from "express";
import { QUESTIONS_DATA } from "../data/chapter.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const isExist = await Chapter.findOne({
      name: QUESTIONS_DATA.name,
    });

    if (isExist) {
      return res.json({
        status: false,
        message: "Chapter already exists",
      });
    }

    const chapter = new Chapter(QUESTIONS_DATA);

    await chapter.save();

    return res.json({
      status: true,
      message: "Chapter created successfully",
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
    const chapters = await Chapter.find({}, { questions: 0 });
    return res.json({ status: true, chapters });
  } catch (err) {
    return res.json({
      status: false,
      message: "Something went wrong",
    });
  }
});

// Route to fetch question details
router.post("/questions/details", async (req, res) => {
  const { ids } = req.body;
  try {
    const chapters = await Chapter.find({ 'questions._id': { $in: ids } });
    const questionDetails = chapters.flatMap(chapter =>
      chapter.questions.filter(q => ids.includes(q._id.toString()))
    );
    return res.json({ status: true, questions: questionDetails });
  } catch (err) {
    console.error('Error fetching question details:', err);
    return res.status(500).json({ status: false, message: "Something went wrong" });
  }
});

export { router as ChapterRouter };
