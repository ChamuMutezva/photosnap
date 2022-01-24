import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/Context'
//import { Link } from 'react-router-dom'
//import LogoImg from '../../assets/shared/desktop/logo.svg'
import SocialLinks from './SocialLinks'
import FooterNavList from './FooterNavList'
import LinkArrow from './LinkArrow'
import FooterLogo from './FooterLogo'

function Footer() {
    const { shared } = useContext(DataContext)
   // console.log(shared.svgs)
    return (
        <footer className="footer-wrapper">
            <div className="footer container">
                <div className="logo-container">
                    <FooterLogo />
                </div>
                <div className="social-platforms">
                    <ul className="social-link-list">
                        {shared && shared.svgs.map(elm => <SocialLinks key={elm.id} Link={elm.link}
                            url={elm.url} content={elm.content} />)}
                    </ul>
                </div>
                <FooterNavList />
                
                <div className="invite">
                <LinkArrow linkText="Get an invite" />
                </div>
                <div className="copyright">
                    <p className="copyright-content">Copyright 2019. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
