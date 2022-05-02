const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Post = new Schema(
    {
        title: { type: String },
        description: { type: String },
        image: { type: String },
        content: { type: String },
        approvalDate: { type: Date, default: null },
        status: { type: String, default: 'Đang chờ duyệt' },
        idCategory: { type: String },
        idUser: { type: String },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model('Post', Post);
