import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Please enter the name of the user"],
    maxLength: [50, "Max length should exceeds more than 50 characters"],
    minLength: [3, "Please enter valid name"],
  },
  email: {
    type: String,
    required: [true, "Please enter the user mail Id"],
    unique: true,
    validate: [validator.isEmail, "Please enter valid email"],
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter the Valid Phone Number"],
    minLength: [10, "Phone Number should at least 10 characters"],
    maxLength: [10, "Phone Number not exceed 10 characters"],
  },
  city: {
    type: String,
    required: [true, "Please enter the city"],
  },
  course: {
    type: String,
    required: [true, "Please enter the course"],
  },
});


export const user = mongoose.model("users", userSchema);
