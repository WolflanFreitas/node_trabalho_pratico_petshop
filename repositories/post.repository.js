import { getMongoClient } from "./mongo.db.js";
import mongo from "mongodb";

async function createPost(post) {
    const client = getMongoClient();
    try {
        await client.connect();
        await client.db("petshop").collection("posts").insertOne(post);
    } catch(error) {
        throw error;
    } finally {
        await client.close();
    }
}

async function getPost(postId) {
    const client = getMongoClient();

    try {
        await client.connect();
        var ObjectId = mongo.ObjectId;
        postId = ObjectId(postId);
        return await client.db("petshop").collection("posts").findOne({_id:postId });
    } catch(error) {
        throw error;
    } finally {
        await client.close();
    }
}

async function getPosts() {
    const client = getMongoClient();

    try {
        await client.connect();
        return await client.db("petshop").collection("posts").find({}).toArray();
    } catch(error) {
        throw error;
    } finally {
        await client.close();
    }
}

async function updatePost(post) {
    const client = getMongoClient();

    try {
        await client.connect();
        await client.db("petshop").collection("posts").updateOne({_id: post._id}, {$set: {comments: post.comments}});
    } catch(error) {
        throw error;
    } finally {
        await client.close();
    }
}

async function createComment(postId, comment) {
    try {
        const post = await getPost(postId);
        delete comment.postId;
        post.comments.push(comment);
        await updatePost(post);
    } catch(error) {
        throw error;
    } 
}

export default {
    createPost,
    getPosts,
    getPost,
    createComment
}