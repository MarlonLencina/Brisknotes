import { Router } from 'express';
import { ensureAuthenticated } from '@modules/Users/infra/http/middlewares/ensureAuthenticated';
import NotesController from '../controllers/notesController';

const routeNotes = Router();
const notesController = new NotesController();

routeNotes.post('/', ensureAuthenticated, notesController.createNote);
routeNotes.delete('/', ensureAuthenticated, notesController.deleteNotes);
routeNotes.get('/', ensureAuthenticated, notesController.getNotes);
/* routeNotes.get('/', ensureAuthenticated, getNotes);*/

export default routeNotes;
