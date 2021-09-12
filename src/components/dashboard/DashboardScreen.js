import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../reducers/authReducer';

export const DashboardScreen = () => {

    const dispatch = useDispatch();
    
    const handleClick = () => {
        dispatch(logout());
    }
    
    return (
        <div>
            <h1>DashboardScreen</h1>
            <button onClick={handleClick}>
                Logout
            </button>
        </div>
    )
}
