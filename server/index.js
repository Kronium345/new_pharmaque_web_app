import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose"; // Add mongoose import
import dotenv from "dotenv"; // Add dotenv import
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
import ENV from "./config.js"; // Add import for your config.js
import path, { dirname } from "path";
import { EventRouter } from "./routes/event.js";
import { Router } from "./routes/index.js";
import { ChapterRouter } from "./routes/chapter.js";
import { CQuizRouter } from "./routes/chaptersQuiz.js";
import { FlashRouter } from "./routes/flashcard.js";
import { FQuizRouter } from "./routes/flashQuiz.js";
import { CommentRouter } from './routes/comment.js'; // Updated to reflect actual file name
import { FlaggedRouter } from './routes/flagged.js';
import { ReportedRouter } from './routes/reported.js';
import { EmailRouter } from "./routes/email.js";
import { SampleRouter } from "./routes/sample.js";
import { SampleFlashRouter } from "./routes/sample-flash.js";
import { NewSampleRouter } from "./routes/new-sample.js";
import { NewSampleFlashRouter } from "./routes/new-sample-flash.js";
import { FlaggedFlashcardRouter } from "./routes/flaggedFlashcards.js";
import StripeRouter from "./routes/stripe.js";


dotenv.config();

const app = express();

// Middlewares
app.use(
  cors({
    origin: ["https://www.pharmaque.co.uk", "http://localhost:5173", process.env.FRONTEND_URL],
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());

// Use express.json() only for non-webhook routes
app.use((req, res, next) => {
  if (req.originalUrl === "/stripe/webhook") {
    next(); // Skip JSON parsing for the webhook route
  } else {
    express.json()(req, res, next); // Apply JSON parsing to other routes
  }
});

app.use("/uploads", express.static("uploads"));

// app.use(
//   "/uploads",
//   express.static(
//     path.join(dirname(new URL(import.meta.url).pathname), "uploads")
//   )
// );

// Serve static files from the 'public' directory
// app.use(express.static('public'));

app.use("/auth", UserRouter);
app.use("/event", EventRouter);
app.use("/chapter", ChapterRouter);
app.use("/cquiz", CQuizRouter);
app.use("/flash", FlashRouter);
app.use("/fquiz", FQuizRouter);
app.use('/api', CommentRouter);
app.use('/flagged', FlaggedRouter);
app.use('/flagged-flashcards', FlaggedRouter);
app.use('/reported', ReportedRouter);
app.use('/send-email', EmailRouter);
app.use('/sample', SampleRouter);
app.use('/new-sample', NewSampleRouter);
app.use('/sample-flash', SampleFlashRouter);
app.use('/new-sample-flash', NewSampleFlashRouter);
app.use("/stripe", StripeRouter);
app.use("/", Router);

app.get('/', (req, res) => {
  res.send('Hello, world! Server is working.');
});

// Utilizing MongoDB Atlas Connection Here
mongoose
  .connect(ENV.ATLAS_URI)
  .then(() => {
    console.log("Database connected successfully");
    const port = process.env.PORT || 7171; // Use process.env.PORT or default to 7171
    app.listen(port, () => {
      console.log(`Server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log("Cannot connect to the database");
  });
