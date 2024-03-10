import express from "express";
import cors from "cors";
import morgan from "morgan";
import mongoose from "mongoose"; // Add mongoose import
import dotenv from "dotenv"; // Add dotenv import
import cookieParser from "cookie-parser";
import { UserRouter } from "./routes/user.js";
import ENV from "./config.js"; // Add import for your config.js
import path, { dirname } from "path";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(morgan("tiny"));
app.use(cookieParser());

app.use(
  "/uploads",
  express.static(
    path.join(dirname(new URL(import.meta.url).pathname), "uploads")
  )
);

// Serve static files from the 'public' directory
// app.use(express.static('public'));

app.use("/auth", UserRouter);

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
