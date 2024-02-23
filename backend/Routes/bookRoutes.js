import express from 'express';
import { Book } from '../Models/bookModel.js';
// import { Book } from '../Models/bookModel.js';

export let router = express.Router();

router.post('/', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send("SEND ALL FIELDS!");
        }
        const newBook = {
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear
        };

        const book = await Book.create(newBook);
        return response.status(201).send(book);
    } catch (error) {
        console.log("ERROR IN BOOKS");
        return response.status(500).send("ERROR IN BOOKS");
    }

});

router.get('/:id', async (request, response) => {
    try {
        let { id } = request.params;
        let book = await Book.findById(id);
        return response.status(200).json(book);
    } catch (error) {
        return response.status(500).send({
            message: error.message
        })

    }
})

router.delete('/:id', async (request, response) => {
    try {
        let { id } = request.params;
        let book = await Book.findByIdAndDelete(id);
        if (!book) return response.status(400).send("BOOK NOT FOUND!");
        return response.status(200).send("DONE!");
    } catch (error) {
        return response.status(500).send({
            message: error.message
        })

    }
})


router.put('/:id', async (request, response) => {
    try {
        if (!request.body.title || !request.body.author || !request.body.publishYear) {
            return response.status(400).send("SEND ALL FIELDS!");
        }
        let { id } = request.params;
        let result = await Book.findByIdAndUpdate(id, request.body);
        if (!result) return response.status(400).send("BOOK NOT FOUND!");
        return response.status(200).send(result);
    } catch (error) {
        return response.status(500).send({
            message: error.message
        })
    }
})

router.get('/', async (request, response) => {
    try {
        const books = await Book.find({});

        return response.status(200).json({
            count: books.length,
            data: books,
        })
    } catch (error) {
        return response.status(500).send({
            message: error.message
        })
    }



});