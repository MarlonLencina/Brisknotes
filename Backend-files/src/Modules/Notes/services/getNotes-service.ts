import IUsersRepository from '@modules/Users/repositories/IUserRepository';
import AppError from '@shared/Error/AppError';
import { inject, injectable } from 'tsyringe';
import notes from '../infra/typeorm/entities/notesModel';
import INotesRepository from '../repositories/INotesRepository';

@injectable()
class getNotesService {
    constructor(
        @inject('UsersRepository')
        private UsersRepository: IUsersRepository,
        @inject('NotesRepository')
        private NotesRepository: INotesRepository,
    ) {}

    public async execute(userId: string): Promise<notes[]> {
        const user = await this.UsersRepository.findUserById(userId);

        if (!user) throw new AppError('cannot find a user with this id', 403);

        const notes = await this.NotesRepository.FindNotesByUserId(userId);

        return notes;
    }
}

export default getNotesService;

