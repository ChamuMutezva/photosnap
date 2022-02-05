import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/Context'
import LinkArrow from './LinkArrow'

function Complimentary() {
    const { shared } = useContext(DataContext)
    
    return (
        <div className="complimentary">
            <div className="complimentary-container">
                <picture>
                    <source media="(min-width: 67.5rem)" srcSet={shared && shared.assets[0].imageDesktop} />
                    <source media="(min-width: 43.125rem)" srcSet={shared && shared.assets[0].imageTablet} />
                    <img src={shared && shared.assets[0].imageMobile} alt="" className="hero-img" />
                </picture>
                <div className="complimentary-content">
                    <div className="container complimentary-grid">
                        <div className="complimentary-title-container">
                            <h2 className="complimentary-title">We're in Beta. Get your invite today!</h2>
                        </div>
                        <div className="link-container invite">
                            <LinkArrow linkText="Get an invite" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Complimentary
