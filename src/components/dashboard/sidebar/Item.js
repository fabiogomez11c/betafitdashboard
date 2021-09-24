import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({itemLabel}) => {
    return (
        <>
        <div className='option'>
            {/* TODO change to url param */}
            <Link 
                className='option__link'
                to='/dashboard/gross'
            >
                {itemLabel}
            </Link>
        </div>
        </>
    )
}
