// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
