"use client"
import { Chart } from "react-google-charts";

const PieChart = ({data, options}) => {
    return (
        <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    )
  }
  
  export default PieChart;