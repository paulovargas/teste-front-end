// CreateUserUseCase.ts
import CreateUserDTO from "./CreateUserDTO";
import UserEntity from "../../entities/UserEntity";
import UserRepository from "../../interfaces/repositories/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<UserEntity> {
    // Verifica se já existe um usuário com o mesmo e-mail
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) {
      throw new Error("Usuário com o mesmo e-mail já existe");
    }

    // Cria uma nova instância de UserEntity com os dados fornecidos
    const newUser = new UserEntity(data.name, data.email, data.password);

    // Salva o novo usuário no repositório
    await this.userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserUseCase;
