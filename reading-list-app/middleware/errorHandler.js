/**
 * Centralized error handler
 */
module.exports = (err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).render('error', {
    error: {
      message: err.message || 'Server error'
    }
  });
};
