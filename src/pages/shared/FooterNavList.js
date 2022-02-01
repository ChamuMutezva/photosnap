import React from 'react'
import { Link } from 'react-router-dom'

function FooterNavList() {
    return (
        <nav className="footer-nav" aria-label="footer navigation">
            <ul className="nav-list" role="navigation" id="menu">
                <li>
                    <Link className="nav-list-item-btn footer-list-btn" to="/">Home</Link>
                </li>
                <li className="nav-list-item">
                    <Link className="nav-list-item-btn footer-list-btn" to="/stories" >Stories</Link>
                </li>
                <li className="nav-list-item">
                    <Link className="nav-list-item-btn footer-list-btn" to="/features" >Features</Link>
                </li>
                <li className="nav-list-item">
                    <Link className="nav-list-item-btn footer-list-btn" to="/pricing" >Pricing</Link>
                </li>
            </ul>
        </nav>
    )
}

export default FooterNavList
