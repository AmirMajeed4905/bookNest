const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');
const { auth } = require('../middleware/auth');
const mongoose = require('mongoose');
const upload = require('../middleware/multer');

// Create book with file upload
router.post('/', auth, upload.single('cover'), async (req, res) => {
    try {
        const bookData = {
            ...req.body,
            createdBy: req.user._id 
        };

        if (req.file) {
            bookData.cover = req.file.filename;
        }

        const book = new Book(bookData);
        await book.save();

        res.status(201).json({ message: 'Book created successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// router.post('/', auth, upload.single('cover'), (req, res, next) => {
//     console.log("🔥 ROUTE HIT");
//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);
//     next();
// });

// Get books with pagination
router.get('/', async (req, res) => {
    try {
        let { page = 1, limit = 10 } = req.query;
        page = parseInt(page);
        limit = parseInt(limit);

        const books = await Book.find()
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);

        const total = await Book.countDocuments();

        res.status(200).json({
            page,
            totalPages: Math.ceil(total / limit),
            books
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get single book
// Get single book
router.get('/:id', async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id))
      return res.status(400).json({ message: 'Invalid book ID' });

    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
})

// Update book (auth required)
router.put('/:id', auth, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: 'Invalid book ID' });

        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        if (book.createdBy.toString() !== req.user._id.toString())
            return res.status(403).json({ message: 'Not authorized to modify this book' });

        Object.assign(book, req.body);
        await book.save();

        res.status(200).json({ message: 'Book updated successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Delete book (auth required)
router.delete('/:id', auth, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: 'Invalid book ID' });

        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        if (book.createdBy.toString() !== req.user._id.toString())
            return res.status(403).json({ message: 'Not authorized to delete this book' });

        await book.deleteOne();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
