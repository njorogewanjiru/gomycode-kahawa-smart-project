import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel";
import router from "./farmRouter";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log("Login attempt with:", email, password); // Debug log

  try {
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "1h",
    });

    res.json({ success: true, token, user });
  } catch (error: any) {
    res.status(500).json({ error: "Server error: " + error.message });
  }
});
export { router as userRouter };