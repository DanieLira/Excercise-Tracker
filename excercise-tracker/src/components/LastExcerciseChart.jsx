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
        name:"Date",
        categories: excercises.map(exe => exe.date)
      }
    },
    series: [
      {
        name: "Duration",
        data: excercises.map(exe => exe.duration)
      }
    ]
  })

  return (
    <div className="bg-slate-50 rounded-lg drop-shadow-md w-fit p-5 mr-5">
      <h3 className="text-sm font-semibold text-slate-400">YOUR LAST CARDIO EXERCISES</h3>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="500"
      />
    </div>
  )
}




