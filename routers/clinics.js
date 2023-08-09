import express from "express";
import { jwtVerify } from "../controllers/auth/jwt.js";

const clinicsRoute = express.Router();

clinicsRoute.post("/", (req, res) => {
  const apiToken = req.headers.authorization?.split(" ")[1];
  if (apiToken) {
    const user = jwtVerify(apiToken).data;
    res.status(200).send(user);
  } else {
    res.status(403).json({ message: "Authentication failed!!!" });
  }
});

export default clinicsRoute;
