const Borrower = require("../models/borrower_model");

const borrowerController = {};

borrowerController.getAllBorrowers = async (req, res) => {
  try {
    const borrower = await Borrower.find();
    return res.status(200).json({
      message: "Daftar peminjam berhasil didapatkan",
      data: borrower,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowerController.getBorrowerById = async (req, res) => {
  const { id } = req.params;
  try {
    const borrower = await Borrower.findById(id);
    if (!borrower) {
      return res.status(404).json({
        message: "Peminjam tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Detail peminjam berhasil didapatkan",
      data: borrower,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowerController.createBorrower = async (req, res) => {
  const { name, phoneNumber, email, address } = req.body;
  try {
    const borrower = await Borrower.create({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      address: address,
    });
    return res.status(201).json({
      message: "Detail peminjam berhasil ditambahkan",
      data: borrower,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowerController.updateBorrower = async (req, res) => {
  const { id } = req.params;
  const { name, phoneNumber, email, address } = req.body;
  try {
    await Borrower.updateOne(
      {
        _id: id,
      },
      {
        name: name,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
      }
    );
    return res.status(200).json({
      message: "Detail peminjam berhasil diperbaruhi",
      newUpdate: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowerController.deleteBorrower = async (req, res) => {
  const { id } = req.params;
  try {
    const borrower = await Borrower.deleteOne({ _id: id });
    if (!borrower) {
      return res.status(404).json({
        message: "peminjam tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Peminjam berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = borrowerController;
