import React from 'react'
import { JSCharting } from 'jscharting-react';
import variables from "../../../../styles/_base/_variables.scss";

export const GrossProfit = () => {

    console.log(variables)

    const data = {
        type: 'vertical column',
        series: [
            {
                points: [
                    { x: '2021-01-02', y: 29.16 },
                    { x: '2021-01-03', y: 58.33 },
                    { x: '2021-01-04', y: 180.01 },
                    { x: '2021-01-05', y: 110.29 },
                    { x: '2021-01-06', y: 93.89 },
                    { x: '2021-01-08', y: 227.5 },
                    { x: '2021-01-09', y: 150 },
                ]
            }
        ],
        box: {
            fill: '#27293E'
        }
    };

    return (
        <>
            <div className='view__title'>
                <h1>
                    Gross Profit Report
                </h1>
            </div>
            <div className='view__board board'>
                <div className='board__chart'>
                    <JSCharting options={data}/>
                </div>
            </div>
        </>
    )
}
