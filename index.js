import express from "express";
import cors from "cors";
import winston from "winston";
import OwnerRouter from "./routes/owner.route.js"
import AnimalRouter from "./routes/animal.route.js"
import ServiceRouter from "./routes/service.route.js";
import PostRouter from "./routes/post.route.js";
import CommentRouter from "./routes/comment.route.js";

const { combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level, message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

global.logger = winston.createLogger({
    level: 'silly',
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)({ filename: "petshop-api.log"})
    ],
    format: combine(
        label( {label: "store-api"}),
        timestamp(),
        myFormat
    )
})

const app = express();
app.use(express.json());
app.use(cors());

app.use("/owner", OwnerRouter);
app.use("/animal", AnimalRouter);
app.use("/service", ServiceRouter);
app.use("/post", PostRouter);
app.use("/comment", CommentRouter);

app.use((err, req, res, next) => {
    global.logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
    res.status(400).send({error: err.message});
})

app.listen(3000, () => console.log("Server running on http://localhost:3000"));