import { FQuiz } from "../models/FlashQuiz.js";
import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.post("/create", checkAuth, async (req, res) => {
  const { flash } = req.body;

  try {
    const user = req.user?.userId;

    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    const existFQuiz = await FQuiz.findOne({ flash, user });

    if (existFQuiz) {
      return res.json({ status: true, fQuiz: existFQuiz });
    }

    const newFQuiz = new FQuiz({
      user,
      flash,
    });
    await newFQuiz.save();

    return res.json({
      status: true,
      message: "FQuiz created successfully",
      fQuiz: newFQuiz,
    });
  } catch (err) {
    console.log(err);
    return res
      .status(200)
      .json({ status: false, message: "Something went wrong" });
  }
});

router.get("/get", checkAuth, async (req, res) => {
  try {
    const user = req.user?.userId;
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    const fQuiz = await FQuiz.find({ user });
    return res.json({ status: true, fQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.get("/get/:flash", checkAuth, async (req, res) => {
  try {
    const { flash } = req.params;
    const fQuiz = await FQuiz.findById(flash).populate("flash");
    return res.json({ status: true, fQuiz });
  } catch (err) {
    console.log(err);
    return res.json({ status: false, message: err });
  }
});

router.patch("/solve", checkAuth, async (req, res) => {
  const { _id, selectedAnswer } = req.body;

  try {
    const quiz = await FQuiz.findById(_id).populate("flash");

    if (!quiz) {
      return res.json({ status: false, message: "FQuiz not found" });
    }

    const attemptedQuestions = quiz.attemptedQuestions + 1;
    const correctAnswers =
      quiz.correctAnswers + (selectedAnswer.isCorrect ? 1 : 0);
    const wrongAnswers = quiz.wrongAnswers + (selectedAnswer.isCorrect ? 0 : 1);

    const updatedFQuiz = await FQuiz.findByIdAndUpdate(
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

    return res.json({ status: true, fQuiz: updatedFQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/flag", checkAuth, async (req, res) => {
  const { _id } = req.body;

  try {
    const quiz = await FQuiz.findById(_id);

    if (!quiz) {
      return res.json({ status: false, message: "FQuiz not found" });
    }

    const flaggedQuestions = quiz.flaggedQuestions + 1;
    const attemptedQuestions = quiz.attemptedQuestions + 1;

    const updatedFQuiz = await FQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          flaggedQuestions,
          attemptedQuestions,
        },
      },
      { new: true }
    );

    return res.json({ status: true, fQuiz: updatedFQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/report", checkAuth, async (req, res) => {
  const { _id } = req.body;

  try {
    const quiz = await FQuiz.findById(_id);

    if (!quiz) {
      return res.json({ status: false, message: "FQuiz not found" });
    }

    const reportedQuestions = quiz.reportedQuestions + 1;
    const attemptedQuestions = quiz.attemptedQuestions + 1;

    const updatedFQuiz = await FQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          reportedQuestions,
          attemptedQuestions,
        },
      },
      { new: true }
    );

    return res.json({ status: true, fQuiz: updatedFQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

router.patch("/skip", checkAuth, async (req, res) => {
  const { _id } = req.body;

  try {
    const quiz = await FQuiz.findById(_id);

    if (!quiz) {
      return res.json({ status: false, message: "FQuiz not found" });
    }

    const attemptedQuestions = quiz.attemptedQuestions + 1;
    const skippedQuestions = quiz.skippedQuestions + 1;

    const updatedFQuiz = await FQuiz.findByIdAndUpdate(
      _id,
      {
        $set: {
          attemptedQuestions,
          skippedQuestions,
        },
      },
      { new: true }
    );

    return res.json({ status: true, fQuiz: updatedFQuiz });
  } catch (err) {
    return res.json({ status: false, message: err });
  }
});

export { router as FQuizRouter };
