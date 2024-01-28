import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';

const Main: NextPage = () => {
  const [DynamicComponent, setDynamicComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    // Carregamento dinâmico do componente com base na rota
    const loadDynamicComponent = async () => {
      try {
        const { default: Component } = await import(`../pages/${getComponentName()}`);
        setDynamicComponent(() => Component);
      } catch (error) {
        console.error('Erro ao carregar componente:', error);
      }
    };

    loadDynamicComponent();
  }, []);

  const getComponentName = (): string => {
    // Obtém o nome do componente com base na rota
    const currentPage = location.pathname; // `location` é disponibilizado no contexto global no navegador
    switch (currentPage) {
      case '/agendar-consulta':
        return 'AgendarConsulta'; // Substitua pelo nome do seu componente de cadastro
      case 'quem-somos':
        return 'QuemSomos'; // Substitua pelo nome do seu componente de lista
      default:
        return 'Home'; // Substitua pelo nome do seu componente principal
    }
  };

  return (
    <div>
      {DynamicComponent ? <DynamicComponent /> : null}
    </div>
  );
};

export default Main;
