import React from 'react'
import Chart from "react-apexcharts"

const DonutChart = () => {
    var options = {}
    var series = [44, 55, 41, 17, 15]

    return (
        <div className="donut">
            <Chart options={options} series={series} type="donut" width="380" />
        </div>
    )
}

export default DonutChart
