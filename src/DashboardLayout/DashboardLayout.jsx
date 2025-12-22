import React from 'react';
import { Outlet } from 'react-router';
import Aside from '../Component/Aside';
import Navbar from '../Component/Navbar';

const DashboardLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='flex flex-col md:flex-row'> 
            <Aside></Aside>
            <div className='ml-64 flex-1 overflow-y-auto p-6 bg-gray-100'>
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default DashboardLayout;