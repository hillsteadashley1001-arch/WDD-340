/**
 * Home page route
 */
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Reading List App' });
});

module.exports = router;
