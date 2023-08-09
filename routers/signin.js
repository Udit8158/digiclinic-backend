import express from "express";
import UserModel from "../models/Users.js";
import { comparePassword } from "../controllers/auth/hashpassword.js";
import { jwtSign } from "../controllers/auth/jwt.js";

const signInRoute = express.Router();

signInRoute.post("/", async (req, res) => {
  const { userName, password } = req.body;
  // check if user already registered
  const user = await UserModel.findOne({ userName });

  if (user) {
    // check if user password is correct
    const isPasswordMatch = comparePassword(password, user.password);
    if (isPasswordMatch) {
      // Auth successful
      const token = jwtSign(user); // generate token
      res.json({ token });
    } else {
      res.status(403).json({ message: "Wrong credentials!!!" });
    }
  } else {
    res.status(404).json({ message: "User not registered!" });
  }
});

export default signInRoute;
