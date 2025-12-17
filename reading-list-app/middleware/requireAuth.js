/**
 * Middleware to require authentication
 * Redirects unauthenticated users to home page
 */
module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect('/');
};
