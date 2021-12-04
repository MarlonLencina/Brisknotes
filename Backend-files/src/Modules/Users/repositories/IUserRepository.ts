import { users } from '../infra/typeorm/entities/usersModel';

interface IUsersRepository {
  findUserById(id: string): Promise<users | undefined>;
}

export default IUsersRepository;
