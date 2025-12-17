/**
 * Book model
 * Stores book data pulled from Google Books API
 */
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
  {
    googleBookId: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String,
      required: true
    },
    authors: {
      type: [String],
      default: []
    },
    description: {
      type: String
    },
    categories: {
      type: [String],
      default: []
    },
    coverImage: {
      type: String
    },
    publishedDate: {
      type: String
    },
    pageCount: {
      type: Number
    },
    averageRating: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Book', bookSchema);
