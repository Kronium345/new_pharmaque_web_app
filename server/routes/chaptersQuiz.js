import { CQuiz } from "../models/ChaptersQuiz.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/create", checkAuth, async (req, res) => {
  const { chapter } = req.body;

  try {
    const user = req.user?.userId;

    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    const existChapter = await CQuiz.findOne({ chapter, user });

    if (existChapter) {
      return res.json({ status: true, cQuiz: existChapter });
    }

    const newCQuiz = new CQuiz({
      user,
      chapter,
    });
    await newCQuiz.save();

    return res.json({
      status: true,
      message: "CQuiz created successfully",
      cQuiz: newCQuiz,
    });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.get("/get", checkAuth, async (req, res) => {
  try {
    const user = req.user?.userId;
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    const cQuiz = await CQuiz.find({ user });
    return res.json({ status: true, cQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.get("/get/:chapter", checkAuth, async (req, res) => {
  try {
    const { chapter } = req.params;
    const cQuiz = await CQuiz.findById(chapter).populate("chapter");
    return res.json({ status: true, cQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/solve", checkAuth, async (req, res) => {
  const { _id, selectedAnswer } = req.body;

  try {
    const quiz = await CQuiz.findById(_id).populate("chapter");

    if (!quiz) {
      return res.json({ status: false, message: "CQuiz not found" });
    }

    const attemptedQuestions = quiz.attemptedQuestions + 1;
    const correctAnswers =
      quiz.correctAnswers + (selectedAnswer.isCorrect ? 1 : 0);
    const wrongAnswers = quiz.wrongAnswers + (selectedAnswer.isCorrect ? 0 : 1);

    const updatedCQuiz = await CQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          selectedAnswer,
          attemptedQuestions,
          correctAnswers,
          wrongAnswers,
        },
      },
      { new: true }
    );

    return res.json({ status: true, cQuiz: updatedCQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/flag", checkAuth, async (req, res) => {
  const { quizId, questionId } = req.body;

  try {
    const quiz = await CQuiz.findById(quizId);

    if (!quiz) {
      return res.status(404).json({ status: false, message: "Quiz not found" });
    }

    // Find the question and update the status
    const question = quiz.questions.find(q => q._id.equals(questionId));
    if (question) {
      question.status = 'flagged';  // Set the status to 'flagged'
      question.flaggedOn = new Date();  // Set the flagging date
    }

    await quiz.save();
    res.json({ status: true, message: "Question flagged successfully", quiz });
  } catch (error) {
    console.error("Error flagging the question:", error);
    res.status(500).json({ status: false, message: "Error flagging question", error });
  }
});

router.get("/flagged", checkAuth, async (req, res) => {
  try {
    const quizzes = await CQuiz.find({ "questions.status": "flagged" });
    const flaggedQuestions = quizzes.map(quiz => ({
      quizId: quiz._id,
      questions: quiz.questions.filter(q => q.status === 'flagged')
    }));

    res.json({ status: true, flaggedQuestions });
  } catch (err) {
    res.status(500).json({ status: false, message: "Error retrieving flagged questions", err });
  }
});



router.patch("/report", checkAuth, async (req, res) => {
  const { _id } = req.body;

  try {
    const quiz = await CQuiz.findById(_id);

    if (!quiz) {
      return res.json({ status: false, message: "CQuiz not found" });
    }

    const reportedQuestions = quiz.reportedQuestions + 1;
    const attemptedQuestions = quiz.attemptedQuestions + 1;

    const updatedCQuiz = await CQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          reportedQuestions,
          attemptedQuestions,
        },
      },
      { new: true }
    );

    return res.json({ status: true, cQuiz: updatedCQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/skip", checkAuth, async (req, res) => {
  const { _id } = req.body;

  try {
    const quiz = await CQuiz.findById(_id);

    if (!quiz) {
      return res.json({ status: false, message: "CQuiz not found" });
    }

    const skippedQuestions = quiz.skippedQuestions + 1;
    const attemptedQuestions = quiz.attemptedQuestions + 1;

    const updatedCQuiz = await CQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          skippedQuestions,
          attemptedQuestions,
        },
      },
      { new: true }
    );

    return res.json({ status: true, cQuiz: updatedCQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

export { router as CQuizRouter };
