import INotesRepository from '@modules/Notes/repositories/INotesRepository';
import { ICreateNoteDTO } from 'Modules/Notes/dtos/ICreateNoteDTO';
import { notes } from '../entities/notesModel';
import { getRepository } from 'typeorm';
import { Repository } from 'typeorm';

class NotesRepositories implements INotesRepository {
    private notesRepository: Repository<notes>;
    constructor() {
        this.notesRepository = getRepository(notes);
    }
    public async createNote({
        title,
        description,
        tags,
        user_id,
    }: ICreateNoteDTO): Promise<notes> {
        const note = this.notesRepository.create({
            title,
            description,
            tags,
            user_id,
        });
        await this.notesRepository.save(note);

        return note;
    }

    public async findNoteById(id: string): Promise<notes | undefined> {
        const note = await this.notesRepository.findOne({ where: { id } });

        return note || undefined;
    }

    public async deleteNote(noteId: string): Promise<void> {
        const note = await this.findNoteById(noteId);
        console.log(note);
        await this.notesRepository.remove(note);
    }

    public async FindNotesByUserId(user_id: string): Promise<notes[]> {
        const notes = await this.notesRepository.find({ where: { user_id } });
        return notes;
    }
}

export default NotesRepositories;
