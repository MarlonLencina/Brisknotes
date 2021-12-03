import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import AppError from '../Error/AppError';
import { config } from '../config/authconfig';

interface tokenPayload {
  iat: number;
  exp: number;
  data: string;
}

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    throw new AppError('JWT token is missing.', 401);
  }

  try {
    const decoded = verify(token, config.jwtSecret);
    const { data } = decoded as tokenPayload;
    req.user = data;
  } catch (error) {
    throw new AppError('Invalid JWT token.', 401);
  }

  next();
};
