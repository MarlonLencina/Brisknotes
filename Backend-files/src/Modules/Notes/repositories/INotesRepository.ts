import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO';
import notes from '@modules/Notes/infra/typeorm/entities/notesModel';

interface INotesRepository {
    createNote(data: ICreateNoteDTO): Promise<notes>;
    findNoteById(noteId: string): Promise<notes | undefined>;
    deleteNote(noteId: string): Promise<void>;
    FindNotesByUserId(user_id: string): Promise<notes[] | undefined>;
}

export default INotesRepository;
