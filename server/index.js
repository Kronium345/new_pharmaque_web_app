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


dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());

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
app.use('/reported', ReportedRouter);
app.use("/", Router);

// Utilizing MongoDB Atlas Connection
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
