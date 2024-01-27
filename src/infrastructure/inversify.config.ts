import { Container } from "inversify";
import CreateUserUseCase from "../useCases/createUser/CreateUserUseCase";
import UserController from "../interfaces/controllers/UserController";
import UserRepository from "../interfaces/repositories/UserRepository";
import UserService from "../services/UserService";
import PokeUserRepository from "../interfaces/repositories/UserRepository";

const container = new Container();

// Registre as dependências no container do Inversify
container.bind<PokeUserRepository>("PokeUserRepository").to(PokeUserRepository);
container.bind<UserService>("UserService").to(UserService);
container.bind<CreateUserUseCase>("CreateUserUseCase").to(CreateUserUseCase);
container.bind<UserController>("UserController").to(UserController);
container.bind<UserRepository>("UserRepository").to(UserRepository);

export default container;
