import React from 'react'

function SocialLinks(props) {
    return (
        <div className="social-link">
            <a href={props.link}>
                <span className="sr-only">{props.content}</span>
                <img src={props.url} alt="" aria-hidden={true} />
            </a>
        </div>
    )
}

export default SocialLinks
