const express = require('express');
const categoryController = require('../controllers/CategoryController');
const router = express.Router();

const authMiddleware = require('../middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', isAuth, categoryController.store);
router.delete('/:id', categoryController.destroy);
router.put('/:id', categoryController.update);
router.get('/:id', categoryController.show);
router.get('/', categoryController.index);

module.exports = router;
