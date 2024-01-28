// pages/index.tsx
import React, { useState, useEffect } from 'react';
import { inject, injectable } from 'inversify';
import { NextPage } from 'next';
import CreateUserUseCase from '../../useCases/createUser/CreateUserUseCase';
import UserService from '../../services/UserService';
import UserEntity from '../../entities/UserEntity';

interface LayoutProps {
  createUserUseCase: CreateUserUseCase;
  userService: UserService;
}

const Layout: NextPage<LayoutProps> = ({ createUserUseCase, userService }) => {
  const [users, setUsers] = useState<UserEntity[]>([]);
  const [newUserName, setNewUserName] = useState('');

  useEffect(() => {
    // Carregar a lista de usuários ao montar o componente
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const fetchedUsers = await userService.getAllUsers();
      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const handleCreateUser = async () => {
    try {
      // Criar um novo usuário usando o CreateUserUseCase
      await createUserUseCase.execute({
        name: newUserName,
        email: 'example@example.com',
        password: 'password123',
      });

      // Recarregar a lista de usuários após a criação
      await loadUsers();

      // Limpar o campo de novo nome de usuário
      setNewUserName('');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <div>
        <h2>Criar Novo Usuário</h2>
        <input
          type="text"
          value={newUserName}
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button onClick={handleCreateUser}>Criar Usuário</button>
      </div>
    </div>
  );
};

export default Layout;
