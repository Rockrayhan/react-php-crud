import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;