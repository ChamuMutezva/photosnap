import React from 'react'
import Arrow from '../../assets/shared/desktop/arrow.svg'

function HeroContent(props) {
    return (
        <div className="hero-content">
            <h1 className="hero-content-title">{props.title}</h1>
            <p className="hero-content-text">{props.content}</p>
            <a href="/" className="get-invite">
                <span>Get an invite</span>
                <img src={Arrow} alt="" />
            </a>
        </div>
    )
}

export default HeroContent
