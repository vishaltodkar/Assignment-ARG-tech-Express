import { Request, Response } from 'express';
import Book from '../models/books';


export const addBook = async (req: Request, res: Response) => {
    const { name, description, numberOfPages, authorName, publisherName } = req.body;
console.log("inside addbook")
    try {
        const newBook = new Book({
            name,
            description,
            numberOfPages,
            authorName,
            publisherName
        });

        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const getBooks = async (req: Request, res: Response) => {
    const { authorName, publisherName } = req.query;
    const filter: { [key: string]: any } = {};

    if (authorName) filter.authorName = authorName;
    if (publisherName) filter.publisherName = publisherName;

    try {
        const books = await Book.find(filter);
        res.status(200).json(books);
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

export const deleteBook = async (req:Request, res:Response) => {
    const { id } = req.params;

    try {
        await Book.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: (error as Error).message });
    }
};

// export default { addBook, getBooks, deleteBook };
