import express, { Request, Response } from "express";
import { config } from "dotenv";
import { dbConnect } from "./db/connect";
import { productRouter } from "./routes/productRoute";
import { userRouter } from "./routes/userRoute";
import financeRoutes from "./routes/financeRoutes";

config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());

// API routes
app.use("/api/transactions", financeRoutes);  // Finance routes
app.use("/products", productRouter);          // Product routes
app.use("/users", userRouter);                // User routes

// Health check / root route
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello from server app" });
});

// Connect to database and start server
dbConnect().then(() => {
  app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
});
