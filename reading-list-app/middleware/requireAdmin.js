/**
 * Middleware to require admin role
 */
module.exports = (req, res, next) => {
  if (req.isAuthenticated() && req.user.role === 'admin') {
    return next();
  }

  res.status(403).render('error', {
    error: { message: 'Access denied' }
  });
};
