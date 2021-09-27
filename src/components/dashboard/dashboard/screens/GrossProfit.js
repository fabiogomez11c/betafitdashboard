import React from 'react'
import { Bar } from "react-chartjs-2";

export const GrossProfit = () => {

    const data = {
        labels: [
            '2021-01-02',
            '2021-01-03',
            '2021-01-04',
            '2021-01-05',
            '2021-01-06',
            '2021-01-08',
            '2021-01-09',
        ],
        datasets: [
            {
                label: 'Gross Profit',
                data: [
                    29.16,
                    58.33,
                    180.01,
                    110.29,
                    93.89,
                    227.5,
                    150,
                ],
                backgroundColor: '#29BCC940',
                borderColor: '#29BCC9',
                borderWidth: 1,
            }
        ]
    };

    const options = {
        maintainAspectRatio: false
    }

    return (
        <>
            <div className='view__title'>
                <h1>
                    Gross Profit Report
                </h1>
            </div>
            <div className='view__board board'>
                <div className='board__chart'>
                    <Bar data={data} options={options}/>
                </div>
            </div>
        </>
    )
}
