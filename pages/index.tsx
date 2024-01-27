// index.tsx
import React from 'react';
import Layout from '../src/presentation/pages/index';
import CreateUserUseCase from '../src/useCases/createUser/CreateUserUseCase';
import UserService from '../src/services/UserService';
import PokeUserRepository from '../src/interfaces/repositories/UserRepository';

const Home: React.FC = () => {
  // Suponha que você tenha instâncias reais de CreateUserUseCase e UserService
  const userRepository = new PokeUserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository)
  const userService = new UserService(userRepository);

  return (
    <Layout createUserUseCase={createUserUseCase} userService={userService} />
  );
};

export default Home;
