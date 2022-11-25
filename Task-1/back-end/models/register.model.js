const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Age: { type: Number, required: true },
    Gender: { type: String, required: true },
    Phone: { type: Number, required: true },
    Country: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("register", registerSchema);
