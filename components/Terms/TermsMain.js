import React from 'react'
import {Container} from "react-bootstrap";
import TickCircleIcon from "../TickCircleIcon";

const title = 'Lorem ipsum dolor sit amet, consecth.'
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus. Suspendisse ultricies posuere euismod. Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus diam, id feugiat ante. Nam lobortis magna sed est posuere eget ornare augue facilisis. Cras nulla tellus, eleifend eu interdum at, pharetra ut felis. Donec semper, augue eu venenatis consectetur, ipsum nisl placerat lorem, et eleifend enim odio vitae odio. Proin ac tortor malesuada lacus rhoncus vehicula. Donec dui dolor, rutrum rutrum sagittis quis, mattis in nulla. Pellentesque elementum enim id turpis consectetur laoreet. Vestibulum tempus condimentum lorem, quis bibendum mi eleifend eu. Nullam eros ante, ultrices vitae malesuada sed, sollicitudin vitae tellus. Phasellus congue egestas nunc, quis dapibus diam gravida a. '


export default function TermsMain() {
    return (
        <div className="terms-block">
            <Container>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <div className="d-flex">
                    <TickCircleIcon/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus.
                        Suspendisse ultricies posuere euismod.
                        Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus
                        diam, id feugiat ante.</p>

                </div>
                <div className="d-flex">
                    <TickCircleIcon/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus.
                        Suspendisse ultricies posuere euismod.
                        Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus
                        diam, id feugiat ante.</p>

                </div>
                <div className="d-flex">
                    <TickCircleIcon/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus.
                        Suspendisse ultricies posuere euismod.
                        Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus
                        diam, id feugiat ante.</p>

                </div>
                <div className="d-flex">
                    <TickCircleIcon/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus.
                        Suspendisse ultricies posuere euismod.
                        Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus
                        diam, id feugiat ante.</p>

                </div>
                <div className="d-flex">
                    <TickCircleIcon/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis vehicula rhoncus.
                        Suspendisse ultricies posuere euismod.
                        Quisque rutrum sollicitudin faucibus. Ut eu enim ac augue ultricies bibendum. Proin eget lectus
                        diam, id feugiat ante.</p>

                </div>
            </Container>
        </div>
    )
}