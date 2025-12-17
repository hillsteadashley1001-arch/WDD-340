const ReadingList = require('../models/ReadingList');

exports.dashboard = async (req, res, next) => {
  try {
    const items = await ReadingList.find({ user: req.user._id })
      .populate('book');

    res.render('readingList/dashboard', { items });
  } catch (err) {
    next(err);
  }
};

exports.add = async (req, res, next) => {
  try {
    await ReadingList.create({
      user: req.user._id,
      book: req.body.bookId
    });

    res.redirect('/reading-list');
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    await ReadingList.findByIdAndUpdate(req.params.id, {
      status: req.body.status
    });

    res.redirect('/reading-list');
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await ReadingList.findByIdAndDelete(req.params.id);
    res.redirect('/reading-list');
  } catch (err) {
    next(err);
  }
};
