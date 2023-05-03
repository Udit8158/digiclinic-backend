import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import registerRoute from "./Routers/register.js";
import signInRoute from "./routers/signin.js";

// define app and port
const app = express();
const port = 3000;

// using middlewares
app.use(express.json());
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());
dotenv.config(); // to use env variables

// connect to db
mongoose.connect(process.env.DB_URI);

// Use Routes
app.use("/api/register", registerRoute);
app.use("/api/signin", signInRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
