/**
 * ReadingList model
 * Tracks user's reading progress
 */
const mongoose = require('mongoose');

const readingListSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book',
      required: true
    },
    status: {
      type: String,
      enum: ['to-read', 'reading', 'completed'],
      default: 'to-read'
    },
    progress: {
      type: Number,
      min: 0,
      max: 100,
      default: 0
    },
    notes: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

/* Prevent duplicate books per user */
readingListSchema.index({ user: 1, book: 1 }, { unique: true });

module.exports = mongoose.model('ReadingList', readingListSchema);
