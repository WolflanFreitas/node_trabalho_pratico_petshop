import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.send("I am live!");
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));