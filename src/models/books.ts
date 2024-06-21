import mongoose, { Schema, Document } from 'mongoose';

export interface IBook extends Document {
    name: string;
    description: string;
    numberOfPages: number;
    authorName: string;
    publisherName: string;
}

const BookSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    numberOfPages: { type: Number, required: true },
    authorName: { type: String, required: true },
    publisherName: { type: String, required: true }
});

const Book = mongoose.model<IBook>('Book', BookSchema);

export default Book;
