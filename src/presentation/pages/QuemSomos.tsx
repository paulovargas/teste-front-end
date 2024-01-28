// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import Main from '../components/Main';

const QuemSomos: NextPage = () => {
  return (
    <div>
      <h1>Quem Somos</h1>
    </div>
  );
};

export default QuemSomos;
