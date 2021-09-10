import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Redirect
} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const isLogged = false

    return (
        <Router>
            <Switch>

                <PublicRouter 
                    path='/login'
                    isAuthenticated={isLogged}
                    component={LoginScreen}
                />

                <PrivateRouter 
                    exact
                    path='/dashboard'
                    isAuthenticated={isLogged}
                    component={DashboardScreen}
                />

            <Redirect to='/login' />
                
            </Switch>
        </Router>
    )
}
