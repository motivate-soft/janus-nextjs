import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Link from 'next/link'
import {FaTwitter, FaYoutube, FaFacebookSquare, FaLinkedinIn, FaMapMarkerAlt} from 'react-icons/fa'
import AppButtons from "../AppButtons";

export default function Footer() {
    return (
        <footer>
            <Container>
                {/*<div className="d-flex justify-content-end p-3">*/}
                    {/*<AppButtons/>*/}
                {/*</div>*/}
                <Row>
                    <Col xs={6} lg={2}>
                        <h6>Links</h6>
                        <Link href="#home">Home</Link>
                        <Link href="#features">Features</Link>
                        <Link href="#pricing">Pricing</Link>
                        <Link href="#service">Service Status</Link>
                    </Col>
                    <Col xs={6} lg={2}>
                        <h6>About Janus</h6>
                        <Link href="#home">Lorem ipsum dolor</Link>
                        <Link href="#home">Lorem ipsum dolor</Link>
                        <Link href="#home">Lorem ipsum dolor</Link>
                        <Link href="#home">Lorem ipsum dolor</Link>
                    </Col>
                    <Col xs={6} lg={2}>
                        <h6>Legal</h6>
                        <Link href="">Privacy Policy</Link>
                        <Link href="/terms">Terms of Use</Link>
                        <Link href="/">Licence Agreement</Link>
                    </Col>
                    <Col xs={6} lg={2}>
                        <h6>Customer Support</h6>
                        <Link href="/">Lorem ipsum dolor</Link>
                        <Link href="/">Lorem ipsum dolor</Link>
                        <Link href="/">Lorem ipsum dolor</Link>
                        <Link href="/">Lorem ipsum dolor</Link>
                    </Col>
                    <Col xs={6} lg={2}>
                        <h6>Get in touch</h6>
                        <div className="phonenumber-box">
                            <div className="icon-box">
                                <img src="/images/icons/icon_phone_volume.png" alt="phone" className="icon-phone"/>
                            </div>
                            <div className="text-box">
                                <p>(123)456-7890</p>
                            </div>
                        </div>
                        <div className="address-box">
                            <div className="icon-box">
                                <FaMapMarkerAlt className="icon-map-marker"/>
                            </div>
                            <div className="text-box">
                                <p>Address will come here</p>
                                <p>Address will come here</p>
                                <p>Address will come here</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="footer-bar">
                <Container>
                    <FaFacebookSquare/>
                    <FaTwitter/>
                    <FaLinkedinIn/>
                    <FaYoutube/>
                </Container>
            </div>
        </footer>
    )
}
