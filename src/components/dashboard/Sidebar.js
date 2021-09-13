import React from 'react'

export const Sidebar = () => {
    return (
        <div className='dashboard__sidebar sidebar'>
            <button className='sidebar__button'>
                CO
            </button>
            <div className='sidebar__profile'>
                <img alt='profile__picture'/>
                <p>Fabio Gomez</p>
            </div>
            <div>
                <p>Option A</p>
                <p>Option B</p>
            </div>
        </div>
    )
}
