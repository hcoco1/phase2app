
import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import FooterHome from "./FooterHome";


function News({ properties }) {
    const sortedProperties = [...properties]
    const [userData, setUserData] = useState({
        
        labels: sortedProperties.filter(data => data.state === 'Texas').sort((a, b) => a.city.localeCompare(b.city)).map(data => data.city),
        datasets: [
            {
                label: "Price Trend by City",
                data: sortedProperties.map((data) => data.listing_price),
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                ],
                borderColor: "black",
                borderWidth: 1,
            },

        ],
    });

    return (
        <Container>
            <Row>
                <Col lg>
                    <hr className="stylehr" />
                    <h3 className="styleh3">Prices Trend by Cities in Texas State. </h3>
                    <hr className="stylehr" />
                    <BarChart chartData={userData} />
                    <hr className="stylehr" />
                    <h3 className="styleh3">Prices Trend by Cities in Texas State. </h3>
                    <hr className="stylehr" />
                    <LineChart chartData={userData} />
                    <FooterHome />
                </Col>
            </Row>
        </Container>


    );
}


export default News;