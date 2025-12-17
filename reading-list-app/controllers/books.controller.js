const Book = require('../models/Book');
const Review = require('../models/Review');
const { searchBooks } = require('../services/googleBooks.service');
const calculateRating = require('../utils/calculateRating');

exports.searchPage = (req, res) => {
  res.render('books/index', { books: [], query: '' });
};

exports.searchResults = async (req, res, next) => {
  try {
    const query = req.query.q;
    const results = await searchBooks(query);

    res.render('books/index', {
      books: results,
      query
    });
  } catch (err) {
    next(err);
  }
};

exports.showBook = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    const reviews = await Review.find({ book: book._id }).populate('user');

    res.render('books/show', {
      book,
      reviews,
      averageRating: calculateRating(reviews)
    });
  } catch (err) {
    next(err);
  }
};

exports.saveBook = async (req, res, next) => {
  try {
    const data = req.body;

    let book = await Book.findOne({ googleBookId: data.googleBookId });

    if (!book) {
      book = await Book.create(data);
    }

    res.redirect(`/books/${book._id}`);
  } catch (err) {
    next(err);
  }
};
