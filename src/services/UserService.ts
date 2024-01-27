// UserService.ts
import UserEntity from "../entities/UserEntity";
import PokeUserRepository from "../interfaces/repositories/UserRepository";

class UserService {
  constructor(private userRepository: PokeUserRepository) {}

  async getAllUsers(): Promise<UserEntity[]> {
    return this.userRepository.getAllUsers();
  }

  async getUserById(id: string): Promise<UserEntity | null> {
    return this.userRepository.findById(id);
  }

  async getUserByEmail(email: string): Promise<UserEntity | null> {
    return this.userRepository.findByEmail(email);
  }

  async updateUser(user: UserEntity): Promise<void> {
    // Adicione aqui lógica específica do usuário, se necessário
    await this.userRepository.update(user);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}

export default UserService;
