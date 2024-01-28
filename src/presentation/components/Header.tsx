// components/Header.tsx
import React from 'react';
import Head from 'next/head';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
