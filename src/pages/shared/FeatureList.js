import React from 'react'

function FeatureList(props) {
    return (
        <div className="feature-list-item">
            <div className="feature-image-container">
                <img src={props.url} alt="" />
            </div>
            <h2 className="feature-list-item-title">{props.title}</h2>
            <p className="feature-list-item-content">{props.content}</p>
        </div>
    )
}

export default FeatureList
