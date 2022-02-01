import React from 'react'
import Arrow from '../../assets/shared/desktop/arrow.svg'

function LinkArrow(props) {
    const linkTag = props.linkText ? "" : "hide-link"
    return (
        <a href="/" className={`get-invite uppercase ${linkTag}`}>
            <span>{props.linkText}</span>
            <img className="arrow" src={Arrow} alt="" width={43} height={14}/>
        </a>
    )
}

export default LinkArrow
