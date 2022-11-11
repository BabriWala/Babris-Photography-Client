import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import {Helmet} from "react-helmet";

const Main = () => {
    return (
        <div>
            <Helmet>
                <title>{`Babri's Photography - Home`}</title>
            </Helmet>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;