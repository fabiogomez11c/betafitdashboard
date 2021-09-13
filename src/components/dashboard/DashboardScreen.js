import React from 'react'
import { Dashboard } from './Dashboard';
import { Sidebar } from './sidebar/Sidebar';

export const DashboardScreen = () => {
    
    return (
        <section className='dashboard'>
            <Sidebar/>
            <Dashboard/>
        </section>
    )
}
