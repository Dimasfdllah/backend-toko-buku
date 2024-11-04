const Author = require("../models/author_model");

const authorController = {};

authorController.getAllAuthors = async (req, res) => {
  try {
    const author = await Author.find();
    return res.status(200).json({
      message: "Daftar penulis berhasil didapatkan",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

authorController.getAuthorById = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.findById(id);
    if (!author) {
      return res.status(404).json({
        message: "Penulis tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Detail penulis berhasil didapatkan",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

authorController.createAuthor = async (req, res) => {
  const { name, bio } = req.body;
  try {
    const author = await Author.create({
      name: name,
      bio: bio,
    });
    return res.status(201).json({
      message: "Detail penulis berhasil ditambahkan",
      data: author,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

authorController.uploadPicture = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Harap unggah gambar" });
    }

    const imagePath = `/uploads/${req.file.filename}`;
    return res.status(200).json({
      message: "Gambar berhasil diunggah",
      imagePath: imagePath,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan saat mengunggah gambar",
      error: error.message,
    });
  }
};

authorController.updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    await Author.updateOne(
      {
        _id: id,
      },
      {
        name: name,
        bio: bio,
      }
    );
    return res.status(200).json({
      message: "Detail penulis berhasil diperbaruhi",
      newUpdate: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

authorController.deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const author = await Author.deleteOne({ _id: id });
    if (!author) {
      return res.status(404).json({
        message: "Penulis tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Penulis berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = authorController;
