import { Squash as Hamburger } from 'hamburger-react'
import React from 'react'
import { OptionItem } from './OptionItem'
import { Profile } from './Profile'

export const Sidebar = () => {
    return (
        <div className='dashboard__sidebar sidebar'>
            <Hamburger/>
            <Profile/>
            <OptionItem/>
        </div>
    )
}
