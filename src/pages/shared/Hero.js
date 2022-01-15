import React from 'react'

function Hero(props) {
    return (
        <div className="hero">
            <picture>
                <source media="(min-width: 1080px)" srcSet={props.desktop} />
                <source media="(min-width: 620px)" srcSet={props.tablet} />
                <img src={props.mobile} alt="" className="hero-img" />
            </picture>
        </div>
    )
}

export default Hero
