import IUsersRepository from 'Modules/Users/repositories/IUserRepository';
import { getRepository, Repository } from 'typeorm';
import { users } from '../entities/usersModel';

class UsersRepository implements IUsersRepository {
  private UsersRepository: Repository<users>;

  constructor() {
    this.UsersRepository = getRepository(users);
  }

  public async findUserById(id: string): Promise<users | undefined> {
    const user = await this.UsersRepository.findOne({ where: { id } });
    return user || undefined;
  }
}

export default UsersRepository;
