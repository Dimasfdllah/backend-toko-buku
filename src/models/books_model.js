const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  publish_date: { type: Date },
  stock: { type: Number, default: 0 },
  cover_image: { type: String },
});

const bookModel = mongoose.model("Book", booksSchema);

module.exports = bookModel;
