import React, {useEffect} from 'react'
import {Navbar, Nav, Form, FormControl, Container} from 'react-bootstrap'
import Link from "next/link";


export default function TopNavbar() {
    // const handleScroll = () => {
    //     if (window.location.pathname = '') {
    //         const featureBlock = document.getElementById("features")
    //         const pricingBlock = document.getElementById("pricing")
    //         const serviceBlock = document.getElementById("service")
    //         // console.log('featureBlock', window.pageYOffset, featureBlock.offsetTop)
    //         if (window.pageYOffset > featureBlock.offsetTop && window.pageYOffset < (featureBlock.offsetTop + featureBlock.offsetHeight)) {
    //             console.log(window.location.href)
    //             window.location.href = window.location.pathname + '#feature'
    //         } else {
    //             window.location.href = window.location.pathname
    //         }
    //         if (window.pageYOffset > pricingBlock.offsetTop && window.pageYOffset < (pricingBlock.offsetTop + pricingBlock.offsetHeight)) {
    //             console.log(window.location.href)
    //             window.location.href = window.location.pathname + '#feature'
    //         } else {
    //             window.location.href = window.location.pathname
    //         }
    //         if (window.pageYOffset > serviceBlock.offsetTop && window.pageYOffset < (serviceBlock.offsetTop + serviceBlock.offsetHeight)) {
    //             console.log(window.location.href)
    //             window.location.href = window.location.pathname + '#feature'
    //         } else {
    //             window.location.href = window.location.pathname
    //         }
    //     }
    // }

    // scroll to element hook
    useEffect(() => {
        if (window.location.href.includes("#")) {
            // const sectionId = window.location.href.slice(window.location.href.indexOf("#") + 1)
            // console.log('sectionId, location', sectionId, location)
            // const element = document.getElementById(sectionId)
            // let elementPosition = element.getBoundingClientRect().top;
            // window.scrollTo({
            //     top: elementPosition,
            //     behavior: "smooth"
            // });
        }
    })

    // change hash on scroll
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll);
    // })

    return (
        <div className="top-nav">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/"><img src="/images/logo.png" alt="logo" className="logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav"/>
                    <Navbar.Collapse id="navbar-nav">
                        <Nav>
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/#features">Features</Nav.Link>
                            <Nav.Link href="/#pricing">Pricing</Nav.Link>
                        </Nav>
                        <div>
                            <button className="btn btn-blue"><Link href="/login">Login</Link></button>
                            <button className="btn btn-green"><Link href="/trial">Free Trial</Link></button>
                        </div>
                        <Form inline>
                            <div className="qrcode-icon-box">
                                <img src="/images/icons/icon_qr_code.png" alt="qrcode"/>
                            </div>
                            <FormControl type="text" placeholder="Enter Short Code Here"/>
                            <button className="btn btn-green">Submit</button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
