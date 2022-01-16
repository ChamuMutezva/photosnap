import React from 'react'
import Arrow from '../../assets/shared/desktop/arrow.svg'

function HeroContent(props) {
    const linkTag = props.linkText ? "" : "hide-link"
    const spanText = props.spanText ? "" : "hide-span"
    //console.log(props)
    return (
        <div className="hero-content container">
            <h1 className="hero-content-title"> 
                <span className={`hero-content-title-span ${spanText}`} >{props.spanText}</span>
                {props.title}
            </h1>
            <p className="hero-content-text">{props.content}</p>
            <a href="/" className={`get-invite ${linkTag}`}>
                <span>{props.linkText}</span>
                <img src={Arrow} alt="" />
            </a>
        </div>
    )
}

export default HeroContent
