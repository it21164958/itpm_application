const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    role: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      require: true,
    },
    contactNumber: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("UserP", UserSchema);
module.exports = User;
