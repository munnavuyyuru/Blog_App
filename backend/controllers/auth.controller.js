import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    email === "" ||
    username === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const newPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: newPassword,
  });

  try {
    await newUser.save();
    res.json({ msg: "Signup Sucessfull" });
  } catch (err) {
    next(err);
  }
};
