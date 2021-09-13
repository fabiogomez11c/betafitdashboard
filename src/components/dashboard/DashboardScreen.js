import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/authReducer';

export const DashboardScreen = () => {

    const dispatch = useDispatch();
    
    const handleLogoutClick = () => {
        dispatch(logout());
    }
    
    return (
        <section className='dashboard'>
            <div className='dashboard__sidebar sidebar'>
                {/* 
                    A whole component (probably with subcomponents)
                    that represents the side bar, from the button to open
                    the side bar, to each of the options to navigate 
                    in the dashboard.

                    - button
                    - profile
                    -- picture
                    -- name
                    - option A
                    - option B
                */}
                <button className='sidebar__button'>
                    CO
                </button>
                <div className='sidebar__profile'>
                    <img alt='profile__picture'/>
                    <p>Fabio Gomez</p>
                </div>
                <div >
                    <p>Option A</p>
                    <p>Option B</p>
                </div>
            </div>
            <div className='dashboard__view'>
                <h1>DashboardScreen</h1>
                <button onClick={handleLogoutClick}>
                    Logout
                </button>
            </div>
        </section>
    )
}
