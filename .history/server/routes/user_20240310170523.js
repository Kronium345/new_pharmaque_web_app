import express from "express";
import bycrypt from "bcrypt";
import multer from "multer";
import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.json({ message: "User already exists" });
  }

  const hashedPassword = await bycrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  await newUser.save();
  return res.json({ status: true, message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ message: "User is not registered. Please try again." });
  }
  const validPassword = await bycrypt.compare(password, user.password);
  if (!validPassword) {
    return res.json({ message: "Password is incorrect. Please try again." });
  }
  const token = jwt.sign(
    { username: user.username, email: user.email },
    process.env.KEY,
    { expiresIn: "1h" }
  );
  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({ status: true, message: "Login successful" });
});

router.post("/forgotpassword", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User is not registered. Please try again." });
    }

    const token = jwt.sign({ id: user._id }, process.env.KEY, {
      expiresIn: "5m",
    });

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "kronium345@gmail.com",
        pass: "ikmu nivr ahxu nefm",
      },
    });

    var mailOptions = {
      from: "kronium345@gmail.com",
      to: email, // Use the dynamic email from the request body
      subject: "Reset Password",
      text: `http://localhost:3000/resetpassword/${token}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        return res.json({ message: "Email has not been sent." });
      } else {
        return res.json({ status: true, message: "Email has been sent." });
      }
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/resetpassword/:token", async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;
  try {
    const decoded = await jwt.verify(token, process.env.KEY);
    const id = decoded.id;
    const hashPassword = await bycrypt.hash(password, 10);
    await User.findByIdAndUpdate({ _id: id }, { password: hashPassword });
    return res.json({
      status: true,
      message: "Password has been updated successfully.",
    });
  } catch (err) {
    return res.json("Invalid token");
  }
});

const verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token" });
    }
    const decoded = await jwt.verify(token, process.env.KEY);
    next();
  } catch (err) {
    return res.json(err);
  }
};

router.get("/verify", verifyUser, (req, res) => {
  return res.json({ status: true, message: "Authorized User" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

router.post(
  "/auth/change-avatar",
  upload.single("avatar"),
  async (req, res) => {
    // Logic for handling avatar change
    try {
      const { userId } = req.user;
      const avatar = req.file;

      // Check if userId and avatar exist
      if (!userId || !avatar) {
        return res
          .status(400)
          .json({ error: "User ID or avatar not provided" });
      }

      // Logic to save/update avatar in the database
      // For example:
      // const user = await User.findById(userId);
      // user.avatar = avatar.filename;
      // await user.save();

      return res.json({ status: true, message: "Avatar changed successfully" });
    } catch (error) {
      console.error("Error changing avatar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);

export { router as UserRouter };
