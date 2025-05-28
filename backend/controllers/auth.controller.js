import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    password === "" ||
    email === "" ||
    username === ""
  ) {
    res.status(400).json({ msg: "All fields are required" });
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
    res.status(500).json({ msg: err.message });
  }
};
