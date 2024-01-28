// pages/index.tsx
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { useRouter } from 'next/router'
import Main from '../components/Main';

const Layout: NextPage = () => {
    const router = useRouter();
    const [pageTitle, setPageTitle] = useState("Página Inicial");

    useEffect(() => {
        if (router.pathname === "/") {
        setPageTitle("Home");            
        }
    })
  return (
    <div>
        {/* <Header title={pageTitle} /> */}
        <Nav/>
        <Main />
    </div>
  );
};

export default Layout;
