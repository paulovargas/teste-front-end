// PokeUserRepository.ts
import UserEntity from "../../entities/UserEntity";
import UserRepository from "../../interfaces/repositories/UserRepository";

class PokeUserRepository implements UserRepository {
  private users: Map<string, UserEntity>;

  constructor() {
    this.users = new Map();
  }

  async findById(id: string): Promise<UserEntity | null> {
    const user = this.users.get(id);
    return user ? { ...user } : null; // Retorna uma cópia do usuário para evitar referências diretas
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = Array.from(this.users.values()).find((u) => u.email === email);
    return user ? { ...user } : null;
  }

  async save(user: UserEntity): Promise<void> {
    this.users.set(user.id, { ...user }); // Armazena uma cópia do usuário
  }

  async update(user: UserEntity): Promise<void> {
    if (this.users.has(user.id)) {
      this.users.set(user.id, { ...user }); // Atualiza uma cópia do usuário
    }
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return Array.from(this.users.values());
  }
}

export default PokeUserRepository;
