const mongoose = require("mongoose");

const farmSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    area: { type: Number },
    numberOfTrees: { type: Number },
  },
  { timestamps: true }
);

const Farm = mongoose.model("Farm", farmSchema);

module.exports = Farm;
