import React from "react"
import Chart from "react-apexcharts"
import exercises from "../test-scripts/test-excercises"

export default function VolumeProgressChart() {

    const [chartOptions, setChartOptions] = React.useState({
        series: [{
            name: "Volume",
            data: exercises.map(exe => exe.volume),
        }],
        options: {
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], 
              opacity: 0.5
            },
          },
          xaxis: {
            categories: exercises.map(exe => exe.date),
          }
        }
      })

    return (
        <div className="bg-slate-50 rounded-lg drop-shadow-md w-fit p-5 mr-5">
            <h3 className="text-sm font-semibold text-slate-400">YOUR PROGRESS FOR VOLUME</h3>
            <Chart
                options={chartOptions.options}
                series={chartOptions.series}
                type="line"
                width="500"
            />
        </div>
    )

}