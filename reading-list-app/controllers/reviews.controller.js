const Review = require('../models/Review');

exports.create = async (req, res, next) => {
  try {
    await Review.create({
      user: req.user._id,
      book: req.body.bookId,
      rating: req.body.rating,
      reviewText: req.body.reviewText
    });

    res.redirect(`/books/${req.body.bookId}`);
  } catch (err) {
    next(err);
  }
};

exports.editForm = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);
    res.render('reviews/edit', { review });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    await Review.findByIdAndUpdate(req.params.id, {
      rating: req.body.rating,
      reviewText: req.body.reviewText,
      isEdited: true
    });

    res.redirect('back');
  } catch (err) {
    next(err);
  }
};

exports.delete = async (req, res, next) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.redirect('back');
  } catch (err) {
    next(err);
  }
};
