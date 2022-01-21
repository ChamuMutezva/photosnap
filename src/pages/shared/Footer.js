import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/Context'
import { Link } from 'react-router-dom'
import LogoImg from '../../assets/shared/desktop/logo.svg'
import SocialLinks from './SocialLinks'

function Footer() {
    const { shared } = useContext(DataContext)

    //  const sharedData = shared && shared.svgs.filter(elm => elm.shared === true)

    console.log(shared.svgs)
    return (
        <footer>
            <div className="logo-container">
                <Link to="/" className="nav-btn" >
                    <img src={LogoImg} alt="photosnap home page" />
                </Link>
            </div>
            <div className="social-platforms">
                <ul>
                    {shared && shared.svgs.map(elm => <SocialLinks key={elm.id} Link={elm.link}
                        url={elm.url} content={elm.content} />)}
                </ul>
              {/*  <SocialLinks /> */}
            </div>
        </footer>
    )
}

export default Footer
