import React from 'react'
import LinkArrow from './LinkArrow'

function Story(props) {
    return (
        <div className="story">
            <picture>
              {/*  <source media="(min-width: 67.5rem)" srcSet={props.desktop} /> */}
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
