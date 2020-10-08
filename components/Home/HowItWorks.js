import React from 'react'
// import IconRegister from '../../public/icons/icon_register.png'
import { Container, Row, Col } from 'react-bootstrap'


const items = [
    {
        id: 1,
        image: 'icon_register',
        title: "Signup and Register",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 2,
        image: 'icon_qrcode',
        title: "Scan QR code",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 3,
        image: 'icon_location',
        title: "Find a Location",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet ipsum dolor sit amet",
    },
    {
        id: 4,
        image: 'icon_order',
        title: "Order your Requirement",
        text: "Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet ipsum dolor sit amet",
    }
]

export default function HowItWorks() {
    return (
        <div className="works-block">
            <Container>
                <h2 className="block-title">How it works?</h2>
                <h5>Lorem ipsum dolor sit amet ipsum dolor sit amet dolor sit amet </h5>
                <Row>
                    {
                        items.map((item, index) => (
                            <Col md={6} lg={3} key={index} >
                                <div className="works-card">
                                    <div className="card-image-wrapper">
                                        <span>{index + 1}</span>
                                        <img src={item.image ? `/images/icons/${item.image}.png` : ``} alt="howitworks" />
                                    </div>
                                    <h5>{item.title}</h5>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}
