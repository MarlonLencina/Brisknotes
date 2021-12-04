import AppError from '@shared/Error/AppError';
import { inject, injectable } from 'tsyringe';
import notes from '../infra/typeorm/entities/notesModel';
import INotesRepository from '../repositories/INotesRepository';

@injectable()
class createNoteService {
  constructor(
    @inject('NotesRepository')
    private NotesRepository: INotesRepository,
  ) {}

  public async execute(noteId: string): Promise<void> {
    if (!noteId) throw new AppError('you need a supply a id do delete a note');

    const note = await this.NotesRepository.findNoteById(noteId);

    if (!note) throw new AppError('Note id not found');

    await this.NotesRepository.deleteNote(noteId);
  }
}

export default createNoteService;
