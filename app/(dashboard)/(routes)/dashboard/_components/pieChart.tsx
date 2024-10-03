"use client"

import { Chart } from "react-google-charts";

const PieChart = ({data, options}) => {
  const modifiedData = data?.map(item => [item.firmName, item.recommendationCount]) || [];
  const formattedData = [["Firm Name", "Recommendation Count"], ...modifiedData];

    return (
        <Chart
        chartType="PieChart"
        data={formattedData}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    )
  }
  
  export default PieChart;