import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import {Helmet} from "react-helmet";
import './Main.css';

const Main = () => {
    return (
        <>
        <div className='website-container px-2 lg:px-0'>
            <Helmet>
                <title>{`Babri's Photography - Home`}</title>
            </Helmet>
            <Header></Header>
            <Outlet></Outlet>     
        </div>
        <div className="main-footer"><Footer></Footer></div>
        </>
    );
};

export default Main;