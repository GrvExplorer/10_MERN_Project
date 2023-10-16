import express from "express";
import { Book } from "../models/bookModels.js";
import { Laptop } from "../models/laptopModels.js";

const router = express.Router();

// posting book into db
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all request field: title, author, publishYear",
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);

    return res.status(200).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});

// getting all the books in db
router.get("/", async (_, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});

// getting book using id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (book) {
      return res.status(200).json(book);
    }
    return res.status(404).json({ message: "Wrong ID" });
  } catch (error) {
    console.log(error.message);
    res.status(404).send({ message: error.message });
  }
});

// Updating the book details
router.put("/:id", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "send all request field: title, author, publishYear",
      });
    }

    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (result) {
      return res.status(200).send({ message: "Successfuly updatated" });
    }
    return res.status(404).send({ message: "Unsuccessfull" });
  } catch (error) {
    console.log(error.message);
    return res.status(404).send({ message: error.message });
  }
});

// Deleting the book from db
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Delete was Unsuccessfull" });
    }
    return res.status(200).json({ message: "Successfuly Deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(404).send({ message: error.message });
  }
});

export default router;
