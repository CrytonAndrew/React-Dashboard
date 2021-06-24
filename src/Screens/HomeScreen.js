import React from 'react'
import LineChart from '../components/Charts/LineChart'
import DonutChart from '../components/Charts/DonutChart'
import { Row, Col } from "react-bootstrap"

const HomeScreen = () => {
    return (
        <div>
            <Row>
                <Col>
                    <LineChart />

                </Col>
                <Col>
                    <DonutChart />
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen
