import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';

export const Dashboard = () => {

    const dispatch = useDispatch();
    
    const handleLogoutClick = () => {
        dispatch(logout());
    }

    return (
    <div className='dashboard__view'>
        <h1>DashboardScreen</h1>
        <button onClick={handleLogoutClick}>
            Logout
        </button>
    </div>
    )
}
