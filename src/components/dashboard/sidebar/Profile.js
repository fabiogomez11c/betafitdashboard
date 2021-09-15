import React from 'react'
import avatar from "../../../assets/user.svg";

export const Profile = () => {
    return (
    <div className='sidebar__profile'>
        <img 
            alt='profile__picture'
            src={avatar}
            style={
                {
                    width:'30px',
                    height:'30px'
                }
            }
        />
        <p>Fabio Gomez</p>
    </div>
    )
}
