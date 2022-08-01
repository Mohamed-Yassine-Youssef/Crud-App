const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    UserEmail: String,
    lastName: String,
    firstName: String,
    Age: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("users", UserSchema);
