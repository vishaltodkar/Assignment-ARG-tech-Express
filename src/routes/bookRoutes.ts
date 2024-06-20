// src/routes/bookRoutes.ts

import express from 'express';
import { addBook, getBooks, deleteBook } from '../controllers/bookController';

import authMiddleware from '../middlerware/authMiddleware'; // Adjust the path as needed




const router = express.Router();

router.post('/',authMiddleware, addBook);
router.get('/', authMiddleware,getBooks);
router.delete('/:id',authMiddleware, deleteBook);


module.exports = router;
export default router;
