import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { 
    BrowserRouter as Router, 
    Switch, 
    Redirect
} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { LoginScreen } from '../components/auth/LoginScreen'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { login, logout, selectAuth } from '../reducers/authReducer'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'

export const AppRouter = () => {

    const [checking, setChecking] = useState(true)
    const authSelector = useSelector(selectAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(login(user.uid))
        } else {
            dispatch(logout());
        }
        setChecking(false)
    }, [dispatch, setChecking])
    });

    if (checking) {
        return (
            <>
                <h1>Loading...</h1>
            </>
        )
    }

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
