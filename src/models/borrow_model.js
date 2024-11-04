const mongoose = require("mongoose");

const borrowSchema = new mongoose.Schema({
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Borrower",
    required: true,
  },
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  borrowDate: { type: Date, default: Date.now },
  returnDate: { type: Date },
  isReturned: { type: Boolean, default: false },
  lateFee: { type: Number, default: 0 },
});

module.exports = mongoose.model("Borrow", borrowSchema);
