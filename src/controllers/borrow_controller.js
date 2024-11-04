const Borrow = require("../models/borrow_model");
const Book = require("../models/books_model");
const Borrower = require("../models/borrower_model");

const borrowController = {};

borrowController.borrowBook = async (req, res) => {
  const { borrower, book } = req.body;
  try {
    const bookId = await Book.findById(book);
    // console.log(bookId);
    if (!bookId || bookId.stock <= 0) {
      return res.status(400).json({ message: "Buku tidak tersedia" });
    }

    bookId.stock -= 1;
    await bookId.save();

    const borrow = await Borrow.create({
      borrower: borrower,
      book: bookId,
    });

    return res.status(201).json({
      message: "Buku berhasil dipinjam",
      data: borrow,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowController.getActiveBorrows = async (req, res) => {
  try {
    const activeBorrows = await Borrow.find({ isReturned: false })
      .populate("borrower", "name contact")
      .populate("book", "title author category")
      .exec();

    return res.status(200).json({
      message: "Daftar peminjaman buku yang masih aktif berhasil didapatkan",
      data: activeBorrows,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

borrowController.returnBook = async (req, res) => {
  const { borrowId } = req.body;
  try {
    const borrow = await Borrow.findById(borrowId);
    if (!borrow) {
      return res
        .status(404)
        .json({ message: "Data peminjaman tidak ditemukan" });
    }

    if (borrow.isReturned) {
      return res.status(400).json({ message: "Buku sudah dikembalikan" });
    }

    const today = new Date();
    const borrowDate = new Date(borrow.borrowDate);
    const dueDate = new Date(borrowDate);
    dueDate.setDate(borrowDate.getDate() + 14);

    let lateFee = 0;
    if (today > dueDate) {
      const lateDays = Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24));
      lateFee = lateDays * 5000;
    }

    const book = await Book.findById(borrow.book);
    book.stock += 1;
    await book.save();

    borrow.isReturned = true;
    borrow.returnDate = today;
    borrow.lateFee = lateFee;
    await borrow.save();

    return res.status(200).json({
      message: "Buku berhasil dikembalikan",
      data: borrow,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Terjadi kesalahan pada server",
      error: error.message,
    });
  }
};

module.exports = borrowController;
