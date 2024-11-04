const Category = require("../models/category_model");

const categoryController = {};

categoryController.getAllCategories = async (req, res) => {
  try {
    const category = await Category.find();
    return res.status(200).json({
      message: "Daftar kategori berhasil didapatkan",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

categoryController.getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.findById(id);
    if (!category) {
      return res.status(404).json({
        message: "Kategori tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Detail kategori berhasil didapatkan",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

categoryController.createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const category = await Category.create({
      name: name,
      description: description,
    });
    return res.status(201).json({
      message: "Detail kategori berhasil ditambahkan",
      data: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

categoryController.updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await Category.updateOne(
      {
        _id: id,
      },
      {
        name: name,
        description: description,
      }
    );
    return res.status(200).json({
      message: "Detail kategori berhasil diperbaruhi",
      newUpdate: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

categoryController.deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await Category.deleteOne({ _id: id });
    if (!category) {
      return res.status(404).json({
        message: "Kategori tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "kategori berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = categoryController;
