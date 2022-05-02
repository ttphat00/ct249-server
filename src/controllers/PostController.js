const Post = require('../models/Post');

class PostController {
    async index(req, res, next) {
        try {
            const posts = await Post.find({});
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async show(req, res, next) {
        try {
            const post = await Post.findById(req.params.id);
            return res.json(post);
        } catch (error) {
            return next(error);
        }
    }

    async showByIdUser(req, res, next) {
        try {
            const posts = await Post.find({ idUser: req.user._id });
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async showByIdCategory(req, res, next) {
        try {
            const posts = await Post.find({ idCategory: req.params.id });
            return res.json(posts);
        } catch (error) {
            return next(error);
        }
    }

    async destroy(req, res, next) {
        try {
            await Post.deleteOne({ _id: req.params.id });
            return res.json('Deleted successfully!');
        } catch (error) {
            return next(error);
        }
    }

    // async destroyByIdUser(req, res, next) {
    //     try {
    //         await Post.deleteMany({ idUser: req.user._id });
    //         return res.json('Deleted successfully!');
    //     } catch (error) {
    //         return next(error);
    //     }
    // }

    async store(req, res, next) {
        if (!req.file) {
            next(new Error('No file uploaded!'));
            return;
        }

        let newPost = new Post({
            ...req.body,
            image: req.file.path,
            idUser: req.user._id,
        });

        try {
            await newPost.save();
            return res.json(newPost);
        } catch (error) {
            return next(error);
        }
    }

    async update(req, res, next) {
        try {
            let post = await Post.findById(req.params.id);

            if (req.file) {
                post.image = req.file.path;
            }

            post.title = req.body.title || post.title;
            post.description = req.body.description || post.description;
            post.content = req.body.content || post.content;
            post.approvalDate = req.body.approvalDate || post.approvalDate;
            post.status = req.body.status || post.status;
            post.idCategory = req.body.idCategory || post.idCategory;

            await post.save();
            return res.json('Updated successfully!');
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new PostController();
