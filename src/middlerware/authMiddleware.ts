import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const authMiddleware = (req: Request, res: Response, next: NextFunction): any => {
  console.log("inside middleware")
  const token = req.header('Authorization');
  console.log("token",token)

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    (req as any).user = decoded;
    console.log("decoded",decoded)
    next();
  } catch (e) {
    res.status(400).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;
