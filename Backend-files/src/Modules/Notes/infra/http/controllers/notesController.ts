import { Request, Response } from 'express';
import { container } from 'tsyringe';
import createNoteService from '@modules/Notes/services/createNote-service';
import deleteNoteService from '@modules/Notes/services/deleteNote-service';
import getNotesService from 'Modules/Notes/services/getNotes-service';

class NotesController {
    public async createNote(req: Request, res: Response): Promise<Response> {
        const userId = req.user;
        const { title, description, tags } = req.body;

        const CreateNoteService = container.resolve(createNoteService);

        const note = await CreateNoteService.execute({
            user_id: userId,
            title,
            description,
            tags,
        });

        return res.status(200).json({
            message: 'note was created',
            note,
        });
    }

    public async deleteNotes(req: Request, res: Response): Promise<Response> {
        const { noteId } = req.body;

        const DeleteNoteService = container.resolve(deleteNoteService);

        await DeleteNoteService.execute(noteId);

        return res.status(200).json({
            message: 'note was deleted',
        });
    }

    public async getNotes(req: Request, res: Response): Promise<Response> {
        const userId = req.user;

        const GetNotesService = container.resolve(getNotesService);

        const notes = await GetNotesService.execute(userId);

        return res.status(200).json({
            message: 'all notes by this user',
            notes,
        });
    }
}

export default NotesController;
