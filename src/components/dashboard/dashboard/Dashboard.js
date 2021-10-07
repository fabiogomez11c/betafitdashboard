import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { GrossProfit } from './screens/GrossProfit';

export const Dashboard = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO handle when there isn't any file here
        const csvFile = document.querySelector('#csvFile')
        console.log(csvFile)
        const input = csvFile.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const text = e.target.result;
            document.write(text)
        };

        reader.readAsText(input);
    }

    return (
    <div className='dashboard__view view'>
        <form id='myForm' onSubmit={handleSubmit}>
            <input 
                id='csvFile'
                type='file' 
                accept='.csv'
            />
            <input 
                type='submit' 
                value='Submit'
            />
        </form>
        <Switch>
            <Route exact path={'/dashboard/gross'}>
                <GrossProfit/>
            </Route>
        </Switch>
    </div>
    )
}
