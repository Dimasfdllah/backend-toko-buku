const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: { type: String },
  porfile_picture: { type: String },
});

const authorModel = mongoose.model("Author", authorSchema);

module.exports = authorModel;
