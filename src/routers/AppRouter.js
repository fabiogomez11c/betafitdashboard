import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route,
    Redirect
} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'


export const AppRouter = () => {

    const isLogged = false

    return (
        <Router>
            <Switch>
                <Route
                    path='/login'
                    component={LoginScreen}
                />

                <Route 
                    exact
                    path='/'
                    component={DashboardScreen}
                />

            <Redirect to='/login' />
                
            </Switch>
        </Router>
    )
}
