import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';
import '../../firebase/config';

export const Dashboard = () => {

    const dispatch = useDispatch();
    
    const handleLogoutClick = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch(logout());
            })
            .catch((error) => {
                console.log(error)
            })
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
