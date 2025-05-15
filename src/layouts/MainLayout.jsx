import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
// import './index.css'

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div className='max-w-7xl mx-auto'>
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;