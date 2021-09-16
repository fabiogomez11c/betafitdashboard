import { Squash as Hamburger } from 'hamburger-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { modifyClass } from '../../../helpers/modifyClass'
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
            dispatch(activate());
        }
    }, [dispatch])

    const handleToggle = () => {
        dispatch(changeStatus());

        modifyClass(isActive, '.sidebar__optionitem', 'sidebar__itemshide');
        modifyClass(isActive, '.sidebar__profile', 'sidebar__itemshide');
        modifyClass(isActive, '.dashboard__sidebar', 'sidebar__reducebasis');
        modifyClass(isActive, '.dashboard__view', 'sidebar__increasebasis');
        modifyClass(isActive, '.dashboard__menuicon', 'sidebar__icondisplacement');
    }

    return (
        <div 
            className='dashboard__sidebar sidebar'
        >
            <div className='dashboard__menuicon'>
                <Hamburger 
                    onToggle={handleToggle}
                    toggled={isActive}
                    color="#FFFF"
                />
            </div>
            <Profile/>
            <OptionItem/>
            {/* {
                !isActive ?
                <>
                </>
                :<></>
            } */}
        </div>
    )
}
