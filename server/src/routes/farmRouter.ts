import express, { Request, Response, NextFunction } from "express";
import Farm from "../models/Farm"; 

const router = express.Router();

// ✅ Get all farms
router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json((await Farm.find().sort({ createdAt: -1 })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error while fetching farms." });
  }
});

// ✅ Create a farm
router.post("/api/farms", (req: express.Request, res: express.Response, next: express.NextFunction) => {

  try {
    const { name, area } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is required." });
    }

    const newFarm = new Farm({ name, area });
    await newFarm.save();
    res.status(201).json(newFarm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create farm." });
  }
});

// ✅ Update a farm
router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, area } = req.body;
    const updatedFarm = await Farm.findByIdAndUpdate(
      req.params.id,
      { name, area },
      { new: true, runValidators: true }
    );

    if (!updatedFarm) {
      return res.status(404).json({ error: "Farm not found." });
    }

    res.json(updatedFarm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update farm." });
  }
});

// ✅ Delete a farm
router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const deleted = await Farm.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: "Farm not found." });
    }

    res.sendStatus(204);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete farm." });
  }
});

export default router;
