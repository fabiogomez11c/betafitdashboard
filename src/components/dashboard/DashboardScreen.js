import React from 'react'
import { Dashboard } from './dashboard/Dashboard';
import { Sidebar } from './sidebar/Sidebar';

export const DashboardScreen = () => {
    
    return (
        <section className='dashboard'>
            <Sidebar/>
            <Dashboard/>
        </section>
    )
}
