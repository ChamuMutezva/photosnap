import React from 'react'
// import Arrow from '../../assets/shared/desktop/arrow.svg'
import LinkArrow from './LinkArrow'

function HeroContent(props) {
  //  const linkTag = props.linkStatus ? "" : "hide-link"
    const spanText = props.spanText ? "" : "hide-span"
    const authorText = props.author ? "" : "hide-author"

    //console.log(props)
    return (
        <div className="hero-content">
            <h2 className="hero-content-title uppercase">
                <span className={`hero-content-title-span ${spanText}`} >{props.spanText}</span>
                {props.title}
            </h2>
            <p className={`hero-content-author ${authorText}`}>
                <span className={`date-written`}>{props.dateWritten}</span>
                <span className={`author`}>{props.author}</span>
            </p>
            <p className="hero-content-text">{props.content}</p>           
           <LinkArrow linkText={props.linkText}/> 
        </div>
    )
}

export default HeroContent
