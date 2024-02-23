import express, { request, response } from "express"
import { PORT, mongodbURL } from "./config.js"
import mongoose, { get } from "mongoose";
import { Book } from "./Models/bookModel.js";
import { router } from "./Routes/bookRoutes.js";
import cors from 'cors'

const app = express();

app.use(express.json());

mongoose.connect(mongodbURL)
    .then(() => {
        console.log('DONE');
        app.listen(PORT, () => {
            console.log(`App at ${PORT}`);
        })
    }).catch((error) => {
        console.log("ERROR");
    });

    console.log("before");

app.use(cors());

app.use('/books',router);

console.log("after");

// app.use(
//     cors({
//         origin: '',
//         methods: [],
//         allowedHeaders: []
//     })
// );






app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("HELLO WORLD!");
});