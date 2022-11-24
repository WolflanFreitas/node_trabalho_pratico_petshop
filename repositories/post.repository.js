import { getMongoClient } from "./mongo.db.js";

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

export default {
    createPost
}