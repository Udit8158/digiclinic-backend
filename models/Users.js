import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  userName: {
    type: "string",
    unique: true,
    min: 3,
    max: 20,
    require: true,
  },
  password: {
    type: "string",
    require: true,
  },
  role: {
    type: "string",
    required: true,
  },
});

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
