import React, {useEffect, useState} from 'react'
import {Row, Col, Container, Form} from 'react-bootstrap'
import NumberInput from '../NumberInput'
import TooltipButton from '../TooltipButton'
import capacityImage from '../../assets/icons/icon_capacity.png'
import tableImage from '../../assets/icons/icon_table.png'
import loyaltyImage from '../../assets/icons/icon_loyalty.png'
import marketingImage from '../../assets/icons/icon_marketing.png'
import rewardsImage from '../../assets/icons/icon_rewards.png'
import websiteImage from '../../assets/icons/icon_website.png'

const businessAdminHelp = [
    'Can manage other Business Admins'
    , 'Can manage Sites'
    , 'Can manage services at all sites'
    , 'Can manage Site Admins'
    , 'Can manage staff at all sites'
]

const siteHelp = [
    'A physical place'
    , 'Can have many locations, e.g. tables'
    , 'Can have many Site Admins'
    , 'Can have many Staff'

]

const siteadminHelp = [
    'Can manage assigned site'
    , 'Can manage staff at assigned site'
    , 'Can manage services at assigned site'

]

const serviceData = [
    {
        id: 1,
        image: capacityImage,
        name: 'Site Capacity',
        helpText: 'The Site Capacity service monitors the number of people tapping in and out of a site. Shows users what the site capacity is and how many people are currently tracked in store.\n' +
            'Costs: £10 per site per month\n'
    },
    {
        id: 2,
        image: tableImage,
        name: 'At Table Ordering',
        helpText: 'The At table Ordering Service allows customers to scan a location, e.g. a table, and place an order for food and or drinks at their table. Orders will be sent to staff at the location or a fixed terminal. We do not take payment for the order or charge any other fees.\n' +
            'Costs: £10 per site per month\n'
    },
    {
        id: 3,
        image: loyaltyImage,
        name: 'Loyalty',
        helpText: 'In conjunction with At Table Ordering, Loyalty offers businesses the opportunity for a loyalty scheme, where users are offered loyalty points for purchases.\n' +
            'Costs: £10 per site per month\n'
    },
    {
        id: 4,
        image: marketingImage,
        name: 'Marketing',
        helpText: 'Reach your customers with unique offers. Even better, if used in conjunction with At Table Ordering customers do not have to show any codes and vouchers. Customers will have agreed to receive marketing messages from you, and you will be able to see how many customers used the offer.\n' +
            'Costs: £10 per site per month, includes 200 free messages per month. \n' +
            'There is a small per message fee of 5p thereafter.\n' +
            'Coming Early 2021…\n'
    },
    {
        id: 5,
        image: rewardsImage,
        name: 'Rewards',
        helpText: 'Reach new customers by offering rewards. Customers will have enabled this option and will be given the reward offer based on certain criteria. An exciting new way to engage with new customers!\n' +
            'Costs: £10 per site per month, includes 200 free messages per month. \n' +
            'There is a small per message fee of 5p thereafter.\n' +
            'Coming Spring 2021…\n'
    }

]


export default function Pricing() {
    const [countbusinessadmin, setcountbusinessadmin] = useState(1)
    const [countsiteadmin, setcountsiteadmin] = useState(1)
    const [countsites, setcountsites] = useState(1)
    const [total, settotal] = useState(0)
    const [services, setservices] = useState(serviceData)


    const handleIncrementItem = (name) => {
        switch (name) {
            case 'admin':
                setcountsiteadmin(countsiteadmin + 1)
                break;
            case 'sites':
                setcountsites(countsites + 1)
                break;
            default:
                setcountbusinessadmin(countbusinessadmin + 1)
        }
    }

    const handleDecreaseItem = (name) => {
        switch (name) {
            case 'admin':
                setcountsiteadmin(countsiteadmin > 1 ? countsiteadmin - 1 : 1)
                break;
            case 'sites':
                setcountsites(countsites > 1 ? countsites - 1 : 1)
                break;
            default:
                setcountbusinessadmin(countbusinessadmin > 1 ? countbusinessadmin - 1 : 1)
        }
    }

    const handleChangeItem = (e) => {
        switch (name) {
            case 'admin':
                setcountsiteadmin(countsiteadmin)
                break;
            case 'sites':
                setcountsites(countsites)
                break;
            default:
                setcountbusinessadmin(countbusinessadmin)
        }
    }


    const handleSelectService = (id) => {
        let array = [...services]
        let selectedIndex = array.findIndex(item => item.id === id)
        array[selectedIndex].selected = array[selectedIndex].selected !== true
        setservices(array)
    }

    const handleOrder = () => {
        console.log(services.filter(item => item.selected === true))
        return null;
    }

    useEffect(() => {
        let countSelectedServices = 0;
        let totalPrice
        services.map(item => {
            if (item.selected === true) {
                countSelectedServices += 1
            }
        })
        totalPrice = countbusinessadmin * 10 + (countsites * ((countsiteadmin - 1 + countSelectedServices) * 10))
        settotal(totalPrice)
    })

    return (
        <div id="pricing" className="pricing-block">
            <h2 className="block-title">Plans and Pricing</h2>
            <Container>
                <div className="pricing-card">
                    <div className="pricing-input-box">
                        <Row>
                            <Col md={6}>
                                <Form.Label>How Many Business Admins:</Form.Label>
                            </Col>
                            <Col md={6}>
                                <NumberInput
                                    value={countbusinessadmin}
                                    name={"badmin"}
                                    onDecreasevalue={handleDecreaseItem}
                                    onIncrementvalue={handleIncrementItem}
                                    onChangevalue={handleChangeItem}/>
                                <TooltipButton texts={businessAdminHelp}/>
                            </Col>
                            <Col xs md={6}>
                                <Form.Label>How Many Site Admins:</Form.Label>
                            </Col>
                            <Col md={6}>
                                <NumberInput
                                    value={countsiteadmin}
                                    name={"admin"}
                                    onDecreasevalue={handleDecreaseItem}
                                    onIncrementvalue={handleIncrementItem}
                                    onChangevalue={handleChangeItem}/>
                                <TooltipButton texts={siteadminHelp}/>
                            </Col>
                            <Col md={6}>
                                <Form.Label>How Many Sites:</Form.Label>
                            </Col>
                            <Col md={6}>
                                <NumberInput
                                    value={countsites}
                                    name={"sites"}
                                    onDecreasevalue={handleDecreaseItem}
                                    onIncrementvalue={handleIncrementItem}
                                    onChangevalue={handleChangeItem}/>
                                <TooltipButton texts={siteHelp}/>
                            </Col>
                        </Row>
                    </div>
                    <div className="service-selection-box">
                        <Row className="justify-content-center">
                            {
                                services.map((item, index) => (
                                    <Col key={index} xs={6} md={2}>
                                        <div
                                            className={item.selected === true ? "service-image-box selected" : "service-image-box"}
                                            onClick={() => handleSelectService(item.id)}>
                                            <TooltipButton texts={item.helpText}/>
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                        <h4>{item.name}</h4>
                                    </Col>
                                ))
                            }
                        </Row>
                    </div>
                    <h1>{total > 0 ? `£${total}` : 's'}</h1>
                    <h4>Per Month</h4>
                    <h5><span>(We do not take any payment details during trial)</span> <br/>
                        Current trial period will end 29 February 2021</h5>
                    <button className="btn btn-green" onClick={() => handleOrder()}>Order Now</button>
                </div>
            </Container>
        </div>
    )
}
