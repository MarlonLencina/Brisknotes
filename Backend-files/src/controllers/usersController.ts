import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../Error/AppError';
import { users } from '../entity/usersModel';
import { hash, compare } from 'bcrypt';
import { verify, decode, sign } from 'jsonwebtoken';
import { config } from '../config/authconfig';

export const createUser = async (req: Request, res: Response): Promise<Response> => {
  const userModelORM = getRepository(users);
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new AppError('You must Inform name, email and password.', 401);
  }

  const hashedPassword = await hash(password, 8);

  const user = userModelORM.create({
    name,
    email,
    password: hashedPassword,
  });

  await userModelORM.save(user);

  delete user.password;

  return res.json({
    message: 'note was created',
    user,
  });
};

export const loginUser = async (req: Request, res: Response): Promise<Response> => {
  const userModelORM = getRepository(users);
  const { email, password } = req.body;

  const user = await userModelORM.findOne({ where: { email } });

  if (!user) {
    throw new AppError('wrong combination of email and password');
  }

  const isCorrectPassword = await compare(password, user.password);

  if (!isCorrectPassword) {
    throw new AppError('wrong combination of email and password');
  }

  const token = sign(
    {
      data: user.id,
    },
    config.jwtSecret,
    { expiresIn: config.expiresIn },
  );

  return res.json({
    message: 'logged with success',
    user,
    token,
  });
};
