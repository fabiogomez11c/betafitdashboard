import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { logout } from '../../../reducers/authReducer';
import logoutImg from '../../../assets/logout.svg'

export const Logout = () => {

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
        <span>
            <img 
                className='sidebar__logout'
                alt='logout'
                src={logoutImg}
                onClick={handleLogoutClick}
            />
        </span>
    )
}
