import jwt from "jsonwebtoken";
// import HttpError from "./httpError";

const checkAuth = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      throw new Error("No Token Found", 401);
    }

    let token = req.headers.authorization?.replace("Bearer", "").trim();
    token = token.replace('"', "").trim();
    token = token.replace('"', "").trim();

    if (!token) {
      throw new Error("Athentication Failed");
    }

    const decodedToken = jwt.verify(token, process.env.KEY);
    req.user = {
      userId: decodedToken.userId,
      email: decodedToken.email,
      role: decodedToken.role,
    };
    next();
  } catch (err) {
    return res
      .status(err?.status || 500)
      .json({ message: err?.message || "Internal Server Error" });
  }
};

export default checkAuth;
