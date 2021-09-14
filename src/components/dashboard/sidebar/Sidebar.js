import { Squash as Hamburger } from 'hamburger-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activate, changeStatus, selectSidebar } from '../../../reducers/sidebarReducer'
import { OptionItem } from './OptionItem'
import { Profile } from './Profile'

export const Sidebar = () => {

    const dispatch = useDispatch()
    const isActive = useSelector(selectSidebar)

    useEffect(() => {
        // hook to handle the unmount of the sidebar,
        // basically it resets the side bar
        return () => {
            dispatch(activate())
        }
    }, [dispatch])

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
