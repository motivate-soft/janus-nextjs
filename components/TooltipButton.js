import React, {useState, useRef} from 'react'
import {Overlay, Tooltip} from 'react-bootstrap'


export default function TooltipButton({texts, place}) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
        <>
            <div
                ref={target}
                className="tooltip-btn-box"
                // onClick={() => setShow(!show)}
                onMouseEnter={() => setShow(!show)}
                onMouseLeave={() => setShow(!show)}
            >
                <span>?</span>
            </div>
            <Overlay target={target.current} show={show} placement={place !== undefined ? place : 'right'}>
                {(props) => (
                    <Tooltip {...props}>
                        {
                            texts.constructor === Array
                                ? <ul>
                                    {texts.map((text, index) => (
                                        <li key={index}>{text}</li>
                                    ))}
                                </ul>
                                : <p>{texts}</p>

                        }
                    </Tooltip>
                )}
            </Overlay>
        </>
    )
}
