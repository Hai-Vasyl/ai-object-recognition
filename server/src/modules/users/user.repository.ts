import { EntityRepository, Repository } from 'typeorm';
import { User } from '@/modules/users/user.entity';
import { getRandomColor } from '@/shared/helpers/get-random-color';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  public async createUser(userData: Partial<User>): Promise<User> {
    const user = new User();

    Object.assign(user, {
      color: getRandomColor(),
      ...userData,
    });

    return user.save();
  }
}
