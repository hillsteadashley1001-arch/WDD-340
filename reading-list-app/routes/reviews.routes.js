const router = require('express').Router();
const controller = require('../controllers/reviews.controller');
const requireAuth = require('../middleware/requireAuth');

router.post('/create', requireAuth, controller.create);
router.get('/:id/edit', requireAuth, controller.editForm);
router.post('/:id/update', requireAuth, controller.update);
router.post('/:id/delete', requireAuth, controller.delete);

module.exports = router;
