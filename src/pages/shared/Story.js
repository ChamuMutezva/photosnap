import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
import LinkArrow from './LinkArrow'

function Story(props) {
    gsap.registerPlugin(ScrollTrigger)
    const storyRef = useRef(null)

    useEffect(() => {
        gsap.from([storyRef.current], {
            duration: 1,
            autoAlpha: 0,
            ease: "none",
            delay: 1,
            scrollTrigger: {
                trigger: storyRef.current,
                start: "top center+=100",
                stagger: 0.5,
                toggleActions: "play none none reverse"
            }
        })
    }, [storyRef]);

    return (
        <div ref={storyRef} className="story">
            <picture>
                <source media="(min-width: 43.125rem)" srcSet={props.tablet} />
                <img src={props.mobile} alt="" className="hero-img" />
            </picture>
            <div className="story-details">
                <div className="story-details-container container">
                    <h2 className="story-details-title">{props.title}</h2>
                    <p className="story-details-author">by {props.author}</p>
                    <LinkArrow linkText="Read story" />
                </div>
            </div>
        </div>
    )
}

export default Story
