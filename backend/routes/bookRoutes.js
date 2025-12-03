const express = require('express');
const router = express.Router();
const Book = require('../models/bookModel');
const { auth } = require('../middleware/auth');
const mongoose = require('mongoose');

// Create book
router.post('/', auth, async (req, res) => {
    try {
        const book = new Book({ ...req.body, createdBy: req.user._id });
        await book.save();
        res.status(201).json({ message: 'Book created successfully', book });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// Get books with pagination
router.get('/', auth,async (req, res) => {
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
});

// Update book
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

// Delete book
router.delete('/:id', auth, async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id))
            return res.status(400).json({ message: 'Invalid book ID' });

        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: 'Book not found' });

        if (book.createdBy.toString() !== req.user._id.toString())
            return res.status(403).json({ message: 'Not authorized to delete this book' });

        await book.remove();
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
});

module.exports = router;
