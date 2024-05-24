export interface User {
    id: string;
    name: string;
    email: string;
  }
  
  export class UserModel {
    private users: User[] = [];
  
    getAll(): User[] {
      return this.users;
    }
  
    getById(id: string): User | undefined {
      return this.users.find(user => user.id === id);
    }
  
    create(user: User): User {
      this.users.push(user);
      return user;
    }
  
    update(id: string, updatedUser: Partial<User>): User | null {
      const index = this.users.findIndex(user => user.id === id);
      if (index === -1) return null;
  
      this.users[index] = { ...this.users[index], ...updatedUser };
      return this.users[index];
    }
  
    delete(id: string): User | null {
      const index = this.users.findIndex(user => user.id === id);
      if (index === -1) return null;
  
      return this.users.splice(index, 1)[0];
    }
  }
  