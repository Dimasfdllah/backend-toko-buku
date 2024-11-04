const mongoose = require('mongoose');

const borrowerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String },
});

module.exports = mongoose.model('Borrower', borrowerSchema);
