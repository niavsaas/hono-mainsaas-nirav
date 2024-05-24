import { UserModel, User } from '../../../models/userModel';

export class UserService {
  private userModel: UserModel;

  constructor() {
    this.userModel = new UserModel();
  }

  getAllUsers(): User[] {
    return this.userModel.getAll();
  }

  getUserById(id: string): User | undefined {
    return this.userModel.getById(id);
  }

  createUser(user: User): User {
    user.id = `${Date.now()}`;
    return this.userModel.create(user);
  }

  updateUser(id: string, updatedUser: Partial<User>): User | null {
    return this.userModel.update(id, updatedUser);
  }

  deleteUser(id: string): User | null {
    return this.userModel.delete(id);
  }
}
