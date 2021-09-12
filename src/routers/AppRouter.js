import React from 'react'
import { useSelector } from 'react-redux'
import { 
    BrowserRouter as Router, 
    Switch, 
    Redirect
} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { selectAuth } from '../reducers/authReducer'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const authSelector = useSelector(selectAuth);

    return (
        <Router>
            <Switch>

                <PublicRouter
                    path='/login'
                    isAuthenticated={authSelector?.length > 0 ? true : false}
                    component={LoginScreen}
                />

                <PrivateRouter 
                    exact
                    path='/dashboard'
                    isAuthenticated={authSelector?.length > 0 ? true : false}
                    component={DashboardScreen}
                />

                <Redirect to='/login' />
                
            </Switch>
        </Router>
    )
}
