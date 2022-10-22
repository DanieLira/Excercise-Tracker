import React from "react"
import Chart from "react-apexcharts";

export default function TemporaryChart() {

  const [chartOptions, setChartOptions] = React.useState({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ]
  })

  return (
    <div className="bg-slate-50 rounded-lg drop-shadow-md">
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="bar"
        width="500"
      />
    </div>
  )
}



