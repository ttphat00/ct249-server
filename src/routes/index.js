const authRouter = require('./auth');
const userRouter = require('./users');
const categoryRouter = require('./categories');
const postRouter = require('./posts');

function route(app) {
    //api users
    app.use('/api/auth', authRouter);
    app.use('/api/users', userRouter);

    //api categories
    app.use('/api/categories', categoryRouter);
    
    //api posts
    app.use('/api/posts', postRouter);

    app.use('/', function (req, res) {
        res.send('HELLO !!!');
    });
}

module.exports = route;
