import React from "react"
import Chart from "react-apexcharts"
import excercises from "../test-scripts/test-excercises"

export default function LastExcerciseChart() {
  
  const [chartOptions, setChartOptions] = React.useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: excercises.map(exce => exce.date)
      }
    },
    series: [
      {
        name: "Duration",
        data: excercises.map(exce => exce.duration)
      }
    ]
  })

  return (
    <div className="bg-slate-50 rounded-lg drop-shadow-md">
      <h3 className="">Your last exercises</h3>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="500"
      />
    </div>
  )
}




