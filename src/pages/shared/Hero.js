import React from 'react'

function Hero(props) {   

    return (
        <div className="hero">
            <picture>
                <source media="(min-width: 67.5rem)" srcSet={props.desktop} />
                <source media="(min-width: 43.125rem)" srcSet={props.tablet} />
                <img src={props.mobile} alt="" className="hero-img" />
            </picture>
        </div>
    )
}

export default Hero
