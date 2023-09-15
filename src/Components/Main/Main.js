import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import CallButton from '../Callbutton/Callbutton';
import ToTop from '../ToTop/ToTop';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <CallButton></CallButton>
            <ToTop></ToTop>
            <Footer></Footer>
        </div>
    );
};

export default Main;