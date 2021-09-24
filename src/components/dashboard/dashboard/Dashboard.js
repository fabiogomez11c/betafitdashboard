import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { GrossProfit } from './screens/GrossProfit';

export const Dashboard = () => {

    return (
    <div className='dashboard__view view'>
        <Switch>
            <Route exact path={'/dashboard/gross'}>
                <GrossProfit/>
            </Route>
        </Switch>
    </div>
    )
}
