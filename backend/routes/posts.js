import express from 'express';
import Post from '../models/Post.js';

const postRouter = express.Router();

postRouter.get('/', async (req, res) => {
    const posts = await Post.find().sort({ createdAt: 'desc' });
    res.send(posts);
});

postRouter.post('/', async (req, res) => {
    const newPost = new Post({
        author: req.body.author,
        message: req.body.message
    })

    const post = await newPost.save();
    res.send({ msg: 'Post Creado', post });
})

export default postRouter;