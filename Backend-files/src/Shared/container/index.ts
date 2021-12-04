import { container } from 'tsyringe';

import INotesRepository from '@modules/Notes/repositories/INotesRepository';
import NotesRepositories from '@modules/Notes/infra/typeorm/repositories/NotesRepositories';

import IUserRepository from '@modules/Users/repositories/IUserRepository';
import UsersRepository from '@modules/Users/infra/typeorm/repositories/usersRepository';

container.registerSingleton<INotesRepository>('NotesRepository', NotesRepositories);
container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository);
