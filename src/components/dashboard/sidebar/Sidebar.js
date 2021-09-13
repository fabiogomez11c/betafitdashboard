import { Squash as Hamburger } from 'hamburger-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeStatus, selectSidebar } from '../../../reducers/sidebarReducer'
import { OptionItem } from './OptionItem'
import { Profile } from './Profile'

export const Sidebar = () => {

    const dispatch = useDispatch()
    const isActive = useSelector(selectSidebar)

    const handleToggle = () => {
        dispatch(changeStatus())
    }

    return (
        <div className='dashboard__sidebar sidebar'>
            <Hamburger onToggle={handleToggle}/>
            {
                isActive ?
                <>
                    <Profile/>
                    <OptionItem/>
                </>
                :<></>
            }
        </div>
    )
}
