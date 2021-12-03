import { Router } from 'express';
import { createNote, getNotes, deleteNotes } from '../controllers/notesController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const routeNotes = Router();

routeNotes.post('/', ensureAuthenticated, createNote);
routeNotes.get('/', ensureAuthenticated, getNotes);
routeNotes.delete('/', ensureAuthenticated, deleteNotes);

export default routeNotes;
