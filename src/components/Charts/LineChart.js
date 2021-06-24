import React from 'react'
import Chart from "react-apexcharts";

const LineChart = () => {
    var stateDataOptions = {
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    }

    var seriesData = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
    ]

    return (
        <div className="container">
            <Chart
                options={stateDataOptions}
                series={seriesData}
                type="line"
                height="300"
                width="1000"
            />
        </div>
    )
}

export default LineChart
