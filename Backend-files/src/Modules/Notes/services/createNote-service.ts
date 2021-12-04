import IUsersRepository from '@modules/Users/repositories/IUserRepository';
import AppError from '@shared/Error/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateNoteDTO } from '../dtos/ICreateNoteDTO';
import notes from '../infra/typeorm/entities/notesModel';
import INotesRepository from '../repositories/INotesRepository';

@injectable()
class createNoteService {
  constructor(
    @inject('NotesRepository')
    private NotesRepository: INotesRepository,
    @inject('UsersRepository')
    private UsersRepository: IUsersRepository,
  ) {}

  public async execute({ description, user_id, tags, title }: ICreateNoteDTO): Promise<notes> {
    if (!user_id) throw new AppError('You cant create a note without required information', 403);

    const user = await this.UsersRepository.findUserById(user_id);

    if (!user) throw new AppError('There is no user with this id, try again with another', 401);

    if (!description || !tags || !title) throw new AppError('You cant create a note without required information', 403);

    const note = await this.NotesRepository.createNote({ description, title, user_id, tags });

    return note;
  }
}

export default createNoteService;
