const express = require("express");
const testRoutes = require("./test_routes");
const authorController = require("../controllers/author_controller");
const bookController = require("../controllers/book_controller");
const categoryController = require("../controllers/category_controller");
const borrowerController = require("../controllers/borrower_controller");
const borrowController = require("../controllers/borrow_controller");
const upload = require("../middleware/uploads");

const routes = express.Router();

// kumpulkan semua routes disini per bagian ex : /author,/books dll
routes.use(testRoutes);

routes.get("/authors", authorController.getAllAuthors);
routes.get("/author/:id", authorController.getAuthorById);
routes.post("/author", authorController.createAuthor);
routes.put("/author/:id", authorController.updateAuthor);
routes.delete("/author/:id", authorController.deleteAuthor);
routes.post(
  "/author/upload",
  upload.single("profile_picture"),
  authorController.uploadPicture
);

routes.get("/books", bookController.getAllBooks);
routes.get("/book/:id", bookController.getBookById);
routes.post("/book", bookController.createBook);
routes.put("/book/:id", bookController.updateBook);
routes.delete("/book/:id", bookController.deleteBook);
routes.post(
  "/book/upload",
  upload.single("cover_image"),
  bookController.uploadCover
);

routes.get("/categories", categoryController.getAllCategories);
routes.get("/category/:id", categoryController.getCategoryById);
routes.post("/category", categoryController.createCategory);
routes.put("/category/:id", categoryController.updateCategory);
routes.delete("/category/:id", categoryController.deleteCategory);

routes.get("/borrowers", borrowerController.getAllBorrowers);
routes.get("/borrower/:id", borrowerController.getBorrowerById);
routes.post("/borrower", borrowerController.createBorrower);
routes.put("/borrower/:id", borrowerController.updateBorrower);
routes.delete("/borrower/:id", borrowerController.deleteBorrower);

routes.get("/borrow/book", borrowController.getActiveBorrows);
routes.post("/borrow/book/list", borrowController.borrowBook);
routes.post("/borrow/book/return", borrowController.returnBook);

module.exports = routes;
