import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {FaCheck} from 'react-icons/fa'


export default function HomeBanner() {
    return (
        <div className="home-banner-block">
            <Container>
                <Row>
                    <Col xs md={6}>
                        <h1>Lorem ipsum dolor sit amet, consectet. </h1>
                        <h4>Lorem ipsum dolor sit amet, consur adipiscing elit. Donec venen</h4>
                        <p><FaCheck/>Lorem ipsum dolor sit amet</p>
                        <p><FaCheck/>Lorem ipsum dolor sit amet</p>
                        <p><FaCheck/>Lorem ipsum dolor sit amet</p>
                        <button className="btn btn-green mb-4">Start My Trial</button>
                        <button className="btn btn-white mb-4">Learn More</button>
                    </Col>
                </Row>
                {/*<img src="/images/banner_image.png" alt="banner bg" className="banner-background"/>*/}
            </Container>
            <img src="/images/banner_divider.png" alt="banner bg" className="banner-divider"/>
            <svg viewBox="0 0 100 25" className="wave-background">
                <path fill="#fff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"/>
            </svg>
            {/* <div className="wave-shape" /> */}
        </div>
    )
}
