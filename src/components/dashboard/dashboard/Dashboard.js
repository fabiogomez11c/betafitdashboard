import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { GrossProfit } from './screens/GrossProfit';

export const Dashboard = () => {

    const {path, url} = useRouteMatch();
    console.log(path, url)

    return (
    <div className='dashboard__view view'>
        <h1>hola</h1>
        <Switch>
            <Route path={'/dashboard/gross'}>
                <GrossProfit/>
            </Route>
        </Switch>
    </div>
    )
}
