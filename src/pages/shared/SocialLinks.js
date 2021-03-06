import React from 'react'

function SocialLinks(props) {
    return (
        <li className="social-link">
            <a href={props.link}>
                <span className="sr-only">{props.content}</span>
                <img src={props.url} alt="" aria-hidden={true} width={props.width} height={props.height} />
            </a>
        </li>
    )
}

export default SocialLinks
