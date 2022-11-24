import PostService from "../services/post.service.js";

async function createPost(req, res, next) {
    try {
        const post = req.body;
        if(!post.title || !post.content || !post.comments) {
            throw new Error("Post title, content and comments are required.");
        }
        await PostService.createPost(post);
        res.sendStatus(200);
    } catch(error) {
        next(error)
    }
}

async function getPosts(req, res, next) {
    try {
        res.send(await PostService.getPosts());
    } catch(error) {
        next(error)
    }
}

export default {
    createPost,
    getPosts
}