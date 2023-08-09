import express from "express";
import UserModel from "../models/Users.js";
import { hashPassword } from "../controllers/auth/hashpassword.js";
import { jwtSign } from "../controllers/auth/jwt.js";

const registerRoute = express.Router();

registerRoute.post("/", async (req, res) => {
  const { userName, password, role } = req.body;
  // check if user already registered
  const user = await UserModel.findOne({ userName });
  if (!user) {
    const newUser = UserModel({
      userName: userName,
      password: hashPassword(password, 10),
      role: role
    });

    const token = jwtSign(newUser); // generate token
    await newUser.save();
    res.json({ token });
  } else {
    res.status(404).json({ message: "User already registered!" });
  }
});

export default registerRoute;
