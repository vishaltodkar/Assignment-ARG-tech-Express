require('dotenv').config();

import express from 'express';
import { Request, Response } from 'express';

import connectDB from './config/db';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
dotenv.config();

const app = express();
app.use(bodyParser.json());

app.post('/generate-token', (req: Request, res: Response) => {
  console.log("req.body",req.body)
  const { userId } = req.body; 
  if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
  }

  try {
      const token = jwt.sign({ userId }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
      res.status(200).json({ token });
  } catch (error) {
      res.status(500).json({ message: 'Failed to generate token' });
  }
});
connectDB();

app.use('/api/books', require('./routes/bookRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
