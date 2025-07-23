import express, { Request, Response } from "express"
import { config } from "dotenv"
import { dbConnect } from "./db/connect"
import { productRouter } from "./routes/productRoute"
import financeRoutes from "./routes/financeRoutes"
import farmRouter from "./routes/farmRouter"
import cors from "cors" 
import { userRouter } from "./routes/userRoute"

config()

const PORT = process.env.PORT || 5000
const app = express()

// Middleware
app.use(express.json())
app.use(
  cors({
    origin: "http://localhost:5173", // ✅ your frontend origin
    credentials: true,
  })
)

// API Routes
app.use("/api/transactions", financeRoutes)
app.use("/products", productRouter)
app.use("/users", userRouter) // ✅ this exposes /users/login
app.use("/api/farms", farmRouter)

// Health check
app.get("/", (req: Request, res: Response) => {
  res.json({ msg: "Hello from server app" })
})

// Start server after DB connect
dbConnect().then(() => {
  app.listen(PORT, () => console.log(`✅ Server is running on PORT ${PORT}`))
})
