import { injectable, inject } from "inversify";
import CreateUserUseCase from "../../useCases/createUser/CreateUserUseCase";

@injectable()
class UserController {
  constructor(@inject("CreateUserUseCase") private createUserUseCase: CreateUserUseCase) {}

  async createUser(): Promise<void> {
    // Lógica para chamar o caso de uso e enviar a resposta
  }
}

export default UserController;
