import React from 'react'
import { Chart } from "react-google-charts";



export default function Dchart({data,options}) {
  return (
    <>
        <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"200px"}
    />
    </>
  )
}
