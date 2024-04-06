import { eventSchema } from "../models/Events.js";
import { CQuiz } from "../models/ChaptersQuiz.js";
import { FQuiz } from "../models/FlashQuiz.js";

import express from "express";
import checkAuth from "../middleware/checkAuth.js";

const router = express.Router();

router.get("/get-homepage", checkAuth, async (req, res) => {
  try {
    const event = await eventSchema
      .findOne({
        user: req.user?.userId,
        formattedDate: { $gte: new Date() },
      })
      .sort({
        formattedDate: 1,
      });

    const cQuiz = await CQuiz.findOne({
      user: req.user?.userId,
    })
      .populate("chapter")
      .sort({
        updatedAt: -1,
      });

    const fQuiz = await FQuiz.findOne({
      user: req.user?.userId,
    })
      .populate("flash")
      .sort({
        updatedAt: -1,
      });

    return res.json({ status: true, event, cQuiz: cQuiz, fQuiz: fQuiz });
  } catch (error) {
    console.error("Error getting events:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

export { router as Router };
