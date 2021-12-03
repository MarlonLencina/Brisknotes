import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import AppError from '../Error/AppError';
import { notes } from '../entity/notesModel';

export const createNote = async (req: Request, res: Response): Promise<Response> => {
  const notesModelORM = getRepository(notes);
  const user = req.user;

  const { title, description, tags } = req.body;

  if (!title || !description) {
    throw new AppError('You must Inform at least title and description to create a note.', 401);
  }

  const note = notesModelORM.create({
    title,
    description,
    tags,
    user_id: user,
  });

  await notesModelORM.save(note);

  return res.json({
    message: 'note was created',
    note,
  });
};

export const getNotes = async (req: Request, res: Response): Promise<Response> => {
  const notesModelORM = getRepository(notes);

  const notesList = await notesModelORM.find();

  return res.json({
    notesList,
  });
};

export const deleteNotes = async (req: Request, res: Response): Promise<Response> => {
  const notesModelORM = getRepository(notes);
  const { noteId } = req.body;

  const note = await notesModelORM.findOne({ where: { id: noteId } });

  if (!note) {
    throw new AppError('could not remove this note, try again another time.');
  }

  await notesModelORM.remove(note);

  return res.json({
    message: 'deleted with success',
  });
};
