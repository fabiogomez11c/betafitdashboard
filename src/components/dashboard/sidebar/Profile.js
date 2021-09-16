import React from 'react'
import avatar from "../../../assets/user.svg";

export const Profile = () => {
    return (
    <div className='sidebar__profile'>
        <img 
            className='sidebar__item'
            alt='profile__picture'
            src={avatar}
        />
        <p className='sidebar__item'> Fabio Gomez </p>
    </div>
    )
}
