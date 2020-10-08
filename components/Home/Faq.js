import React, {useState} from 'react'
import {Container, Accordion, Card} from 'react-bootstrap'
// import {FaArrowCircleUp, FaArrowCircleDown} from 'react-icons/fa'
import ArrowIcon from "../ArrowIcon";

const faqs = [
    {
        id: 1,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id: 2,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id: 3,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id: 4,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id: 5,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
        id: 6,
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore?',
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minimveniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
]

export default function Faq() {
    const [items, setItems] = useState(faqs)

    const handleClick = (id) => {
        let array = [...items];
        let itemIndex = array.findIndex(item => id === item.id)
        array[itemIndex].open = array[itemIndex].open !== true;
        setItems(array)
    }


    return (
        <div id="faq" className="faq-block">
            <Container>
                <h2 className="block-title">Frequently asked questions</h2>
                <Accordion defaultActiveKey="1">
                    {
                        items.map((item, index) => (
                            <Card key={index} className="faq-box">
                                <Accordion.Toggle as={Card.Header} eventKey={item.id} className="faq-question-box"
                                                  onClick={() => handleClick(item.id)}>
                                    {
                                        item.open ? <ArrowIcon/> : <ArrowIcon className="selected"/>
                                    }
                                    <p>{item.question}</p>
                                </Accordion.Toggle>
                                <Accordion.Collapse eventKey={item.id} className="faq-answer-box">
                                    <Card.Body><p>{item.answer}</p></Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        ))
                    }
                </Accordion>
            </Container>
        </div>
    )
}
