const router = require('express').Router();
const booksController = require('../controllers/books.controller');
const requireAuth = require('../middleware/requireAuth');

router.get('/', booksController.searchPage);
router.get('/search', booksController.searchResults);
router.post('/save', requireAuth, booksController.saveBook);
router.get('/:id', booksController.showBook);

module.exports = router;
