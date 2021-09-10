import React from 'react'
import { Redirect, Route } from 'react-router'

export const PublicRouter = ({
    component: Component,
    isAuthenticated,
    ...rest
}) => {
    return (
        // <h1>Hola mundo</h1>
        <Route 
            {...rest}
            component={
                (props) => (
                    (!isAuthenticated)
                    ? (<Component {...props} />)
                    : (<Redirect to='/dashboard'/>)
                )
            }
        />   
    )
}
