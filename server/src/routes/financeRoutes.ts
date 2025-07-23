import express from "express";
import Transaction from "../models/TransactionModels";

const router = express.Router();

// GET all transactions
router.get("/", async (req, res) => {
  const transactions = await Transaction.find().sort({ createdAt: -1 });
  res.json(transactions);
});

// POST new transaction
router.post("/", async (req, res) => {
  try {
    const { type, category, amount, date, note } = req.body;
    const transaction = new Transaction({ type, category, amount, date, note });
    await transaction.save();
    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ error: "Failed to create transaction" });
  }
});

// DELETE transaction
router.delete("/:id", async (req, res) => {
  try {
    await Transaction.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch {
    res.status(500).json({ error: "Failed to delete transaction" });
  }
});

export default router;
