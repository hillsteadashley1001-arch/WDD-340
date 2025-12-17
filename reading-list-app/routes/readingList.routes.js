const router = require('express').Router();
const controller = require('../controllers/readingList.controller');
const requireAuth = require('../middleware/requireAuth');

router.get('/', requireAuth, controller.dashboard);
router.post('/add', requireAuth, controller.add);
router.post('/:id/update', requireAuth, controller.update);
router.post('/:id/delete', requireAuth, controller.remove);

module.exports = router;
