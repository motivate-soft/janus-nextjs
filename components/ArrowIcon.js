import React from 'react'
import IconArrow from '../assets/svgs/icon_arrow_up.svg'

export default function ArrowIcon({className}) {
    return (
        <div className={className !== undefined ? `arrow-icon ${className}` : 'arrow-icon'}>
            <IconArrow/>
        </div>
    )
}