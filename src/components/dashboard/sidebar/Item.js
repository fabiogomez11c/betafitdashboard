import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export const Item = ({itemLabel}) => {
    const {url} = useRouteMatch();
    const pathString = `${url}/${itemLabel}`
    console.log(pathString)
    return (
        <>
        <div className='option'>
            <Link to='/dashboard/gross'>{itemLabel}</Link>
        </div>
        </>
    )
}
