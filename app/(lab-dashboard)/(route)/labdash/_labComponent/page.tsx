import React from 'react'
import { Chart } from "react-google-charts";


export default function PiechartLab({data,options}) {

    return (
        <>

            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"400px"}
            />

        </>
    )
}
