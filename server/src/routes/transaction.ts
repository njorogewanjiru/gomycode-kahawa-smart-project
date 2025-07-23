
import express, { Request, Response } from "express";
import Transaction from "../models/TransactionModels";
const router = express.Router();


// GET /api/transactions
router.get("/", async (req: Request, res: Response) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch transactions." });
  }
});

// POST /api/transactions
router.post("/", async (req: Request, res: Response) => {
  try {
    const { type, category, amount, date, note } = req.body;

    const newTransaction = new Transaction({
      type,
      category,
      amount,
      date,
      note,
    });

    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to save transaction." });
  }
});


export default router;
