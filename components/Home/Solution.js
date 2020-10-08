import React from 'react'
import {Container} from 'react-bootstrap'

export default function Solution() {
    return (
        <div id="solution" className="solution-block">
            <Container>
                <div className="solution-image-box">
                    <img src="/images/map.png" alt="banner bg" className="solution-map-image"/>
                </div>
                <div className="solution-text-box">
                    <h2 className="block-title">What It Is</h2>
                    <h4>The solution initially is to provide a much-needed simple GDPR data collection ability for
                        Clients. Calendar Events will solely be identified by the location of the Site as scanned via a
                        unique QR Code. Clients may have multiple sites. </h4>
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                    <p>Lorem ipsum dolor sit amet ipsum dolor sit amet</p>
                    <button className="btn btn-green mb-4">Start My Trial</button>
                    <button className="btn btn-white mb-4">Plans & Pricing</button>
                </div>
            </Container>
        </div>
    )
}
