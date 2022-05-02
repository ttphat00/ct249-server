const express = require('express');
const postController = require('../controllers/PostController');
const router = express.Router();

const fileUploader = require('../config/cloudinary.config');

const authMiddleware = require('../middleware/auth.middlewares');

const isAuth = authMiddleware.isAuth;

router.post('/', fileUploader.single('file'), isAuth, postController.store);

// router.delete('/delete-my-posts', isAuth, postController.destroyByIdUser);
router.delete('/:id', postController.destroy);

router.put('/:id', fileUploader.single('file'), postController.update);

//get products by id_category
router.get('/by-category/:id', postController.showByIdCategory);

//get my products
router.get('/my-posts', isAuth, postController.showByIdUser);

router.get('/:id', postController.show);
router.get('/', postController.index);

module.exports = router;
