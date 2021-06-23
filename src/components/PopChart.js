import React, { useState } from 'react'
import Chart from "react-apexcharts"

const PopChart = () => {
    const [barType, setBarType] = useState("line")

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

    const clickHandler = () => {
        setBarType("bar")
    }

    return (
        <div className="container">
            <Chart
                options={stateDataOptions}
                series={seriesData}
                type={barType}
                height="450"
                width="100%"
            />
            <button onClick={clickHandler}>change to line</button>
        </div>
    )
}

export default PopChart
