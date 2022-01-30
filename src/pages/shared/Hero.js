import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';

function Hero(props) {
    gsap.registerPlugin(ScrollTrigger)
    const heroRef = useRef(null)

    useEffect(() => {
        gsap.from(heroRef.current, {
            duration: 1,
            autoAlpha: 0,
            ease: "none",
            delay: 1,
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top center+=100",
                toggleActions: "play none none reverse"
            }
        })
    }, [heroRef]);


    return (
        <div ref={heroRef} className="hero">
            <picture>
                <source media="(min-width: 67.5rem)" srcSet={props.desktop} />
                <source media="(min-width: 43.125rem)" srcSet={props.tablet} />
                <img src={props.mobile} alt="" className="hero-img" />
            </picture>
        </div>
    )
}

export default Hero
