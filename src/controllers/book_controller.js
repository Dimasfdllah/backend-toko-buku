const Book = require("../models/books_model");
const Author = require("../models/author_model");
const Category = require("../models/category_model");

const bookController = {};

bookController.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find()
      .populate("author", "_id name bio")
      .populate("category", "_id name description");

    return res.status(200).json({
      message: "Daftar buku berhasil didapatkan",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};
bookController.getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.findById(id)
      .populate("author", "_id name bio")
      .populate("category", "_id name description");
    if (!books) {
      return res.status(404).json({
        message: "Buku tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "Detail buku berhasil didapatkan",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

bookController.createBook = async (req, res) => {
  const { title, author, category, stock } = req.body;

  try {
    const authorId = await Author.findById(author);
    const categoryId = await Category.findById(category);
    // console.log(authorId);
    // console.log(categoryId);

    if (!author || !category) {
      return res.status(404).json({
        message: "Author atau category tidak ditemukan",
      });
    }

    const books = await Book.create({
      title: title,
      author: authorId._id,
      category: categoryId._id,
      stock: stock,
    });
    return res.status(201).json({
      message: "Detail buku berhasil ditambahkan",
      data: books,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

bookController.uploadCover = (req, res) => {
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

bookController.updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, category, stock } = req.body;
  try {
    await Book.updateOne(
      {
        _id: id,
      },
      {
        title: title,
        author: author,
        category: category,
        stock: stock,
      }
    );
    return res.status(200).json({
      message: "Detail buku berhasil diperbaruhi",
      newUpdate: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

bookController.deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const books = await Book.deleteOne({ _id: id });
    if (!books) {
      return res.status(404).json({
        message: "Buku tidak ditemukan",
      });
    }
    return res.status(200).json({
      message: "buku berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({
      message: "terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = bookController;
