import express from "express";
import bycrypt from "bcrypt";
import multer from "multer";
import { User } from "../models/User.js";
import jwt, { decode } from "jsonwebtoken";
import nodemailer from "nodemailer";
import { upload } from "../middleware/multer.js";
import checkAuth from "../middleware/checkAuth.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const router = express.Router();


import bcrypt from "bcrypt"; // Ensure correct import of bcrypt if not imported already

router.post("/signup", async (req, res) => {
  try {
    const { username, email, password, subscriptionType, university, pharmacistType } = req.body;
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    let subscriptionLevel;

    switch (subscriptionType) {
      case "Three Months":
        subscriptionLevel = 2;
        break;
      case "Nine Months":
        subscriptionLevel = 3;
        break;
      default:
        subscriptionLevel = 1;
    }

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      subscriptionType: subscriptionType || "Free",
      subscriptionLevel,
      university: university || "",
      pharmacistType: pharmacistType || ""
    });

    await newUser.save();

    return res.status(201).json({
      status: true,
      message: "User registered successfully",
      user: {
        username: newUser.username,
        email: newUser.email,
        subscriptionType: newUser.subscriptionType,
        subscriptionLevel: newUser.subscriptionLevel,
        university: newUser.university,
        pharmacistType: newUser.pharmacistType,
      }
    });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});


// New Route for Updating University
router.post("/update-university", checkAuth, async (req, res) => {
  const { userId } = req.user;
  const { university } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.university = university;
    await user.save();

    return res.json({ status: true, message: "University updated successfully" });
  } catch (error) {
    console.error("Error updating university:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// New Route for Updating Subscription Plan
router.post("/update-subscription-plan", checkAuth, async (req, res) => {
  const { userId } = req.user;
  const { subscriptionType } = req.body;

  let subscriptionLevel;
  switch (subscriptionType) {
    case "Three Months":
      subscriptionLevel = 2;
      break;
    case "Nine Months":
      subscriptionLevel = 3;
      break;
    default:
      subscriptionLevel = 1;
  }

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { subscriptionType, subscriptionLevel },
      { new: true }
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({ status: true, message: "Subscription updated successfully", user });
  } catch (error) {
    console.error("Error updating subscription:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// New Route for Updating Pharmacist Type
router.post("/update-pharmacist-type", checkAuth, async (req, res) => {
  const { userId } = req.user;
  const { pharmacistType } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.pharmacistType = pharmacistType;
    await user.save();

    return res.json({ status: true, message: "Pharmacist type updated successfully" });
  } catch (error) {
    console.error("Error updating pharmacist type:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// user.js
router.post("/update-profile", async (req, res) => {
  const { email, subscriptionPlan, university, pharmacistType, avatar } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (subscriptionPlan) user.subscriptionPlan = subscriptionPlan;
    if (university) user.university = university;
    if (pharmacistType) user.pharmacistType = pharmacistType;
    if (avatar) user.avatar = avatar;

    await user.save();
    return res.json({ status: true, message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
});


// Save Profile Endpoint
router.post("/save-profile", async (req, res) => {
  const { email, subscriptionPlan, university, pharmacistType } = req.body;

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (subscriptionPlan) user.subscriptionPlan = subscriptionPlan;
    if (university) user.university = university;
    if (pharmacistType) user.pharmacistType = pharmacistType;

    await user.save();
    return res.json({ status: true, message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
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
    { username: user.username, email: user.email, userId: user._id },
    process.env.KEY
  );

  res.cookie("token", token, { httpOnly: true, maxAge: 360000 });
  return res.json({
    status: true,
    token,
    user: {
      username: user.username,
      email: user.email,
      userId: user._id,
    },
  });
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
        user: "pharmaque23@gmail.com",
        pass: "gapb jwqn zehc ipss",
      },
    });

    var mailOptions = {
      from: "pharmaque23@gmail.com",
      to: email, // Use the dynamic email from the request body
      subject: "Reset Password",
      text: `https://www.pharmaque.co.uk/resetpassword/${token}`,
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

router.post("/changepassword", checkAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  const { userId } = req.user;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bycrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Current password is incorrect" });
    }

    const hashedPassword = await bycrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    return res.json({ status: true, message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});


const verifyUser = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.json({ status: false, message: "No token" });
    }
    const decoded = jwt.verify(token, process.env.KEY);

    req.user = decoded;

    next();
  } catch (err) {
    return res.json(err);
  }
};

router.get("/verify", checkAuth, (req, res) => {
  return res.json({ status: true, message: "Authorized User" });
});

router.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ status: true });
});

router.post(
  "/change-avatar",
  upload.single("avatar"),
  checkAuth, // Use checkAuth to ensure the user is authenticated
  async (req, res) => {
    try {
      const { userId } = req?.user;
      const avatar = req.file;

      // Check if userId and avatar exist
      if (!userId || !avatar) {
        return res.status(400).json({ error: "User ID or avatar not provided" });
      }

      const user = await User.findById(userId);

      // Check if user exists
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      // Update the avatar path in the database
      user.avatar = avatar.path;
      await user.save();

      return res.json({ status: true, message: "Avatar changed successfully" });
    } catch (error) {
      console.error("Error changing avatar:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
);


router.get("/get-profile", checkAuth, async (req, res) => {
  try {
    const { userId } = req?.user;

    if (!userId) {
      return res.status(400).json({ error: "User ID not provided" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.json({ status: true, user: { username: user.username, email: user.email, avatar: user.avatar, university: user.university, subscriptionPlan: user.subscriptionPlan, pharmacistType: user.pharmacistType } }); // Include all fields here
  } catch (error) {
    console.error("Error getting profile:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});



export { router as UserRouter };
