import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import AppButtons from "../AppButtons";
import TickCircleIcon from "../TickCircleIcon";

export default function Features() {
    return (
        <div id="features" className="product-features-block">
            <h2 className="block-title">Product Features</h2>
            <h5>Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet copy </h5>
            <Container>
                <Row>
                    <Col lg={4}>
                        <ul className="feature-list">
                            <li>
                                <TickCircleIcon/>
                                Provide GDPR compliant venueattendee records
                            </li>
                            <li>
                                <TickCircleIcon/>
                                Provide ability to order at venue
                            </li>
                            <li>
                                <TickCircleIcon/>
                                Manage personal records.
                            </li>
                            <li>
                                <TickCircleIcon/>
                                Provide for Covid-19 notifications.
                            </li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <div className="feature-image-box">
                            <div className="feature-center-background">
                                {/* <img src="/images/feature_image.jpg" alt="feature-center-image" /> */}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <ul className="feature-list">
                            <li>
                                <TickCircleIcon/>
                                Provide Clients with ways to identify
                                staff and manage inventory per location
                            </li>
                            <li>
                                <TickCircleIcon/>
                                Provide Clients with ways to market to
                                known Users
                            </li>
                            <li>
                                <TickCircleIcon/>
                                bonuses to known Users
                            </li>
                            <li>
                                <TickCircleIcon/>
                                Provide Users with reward opportunities
                            </li>
                        </ul>
                    </Col>
                </Row>
                <div className="d-flex justify-content-end p-3">
                    <AppButtons/>
                </div>
            </Container>
        </div>
    )
}
