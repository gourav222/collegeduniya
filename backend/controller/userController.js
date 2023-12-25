import { user } from "../models/userSchema.js";
import sendToken from "../utility/sendToken.js";
export const registerUser = async (req, res) => {
  try {
    if (
      !req.body.fullName ||
      !req.body.email ||
      !req.body.city ||
      !req.body.phoneNumber ||
      !req.body.course
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingEmail = await user.find({ email: req.body.email });
    const existingPhone = await user.find({ phone: req.body.phoneNumber });
    if (existingEmail.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }
    if (existingPhone.length > 0) {
      return res.status(400).json({ message: "Phone number already exists" });
    }
    const users = await user.create(req.body);
    sendToken(users, 201, res);
  } catch (error) {
    console.log(error);
  }
};
