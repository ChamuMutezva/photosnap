import React from 'react'
import { Link } from 'react-router-dom'
import MenuImg from '../../assets/shared/mobile/menu.svg'
import CloseImg from '../../assets/shared/mobile/close.svg'
import LogoImg from '../../assets/shared/desktop/logo.svg'

function Header() {
    return (
        <header className="flex container">
            <div className="logo-container">
                <Link to="/">
                    <img src={LogoImg} alt="photosnap home page" />
                </Link>
            </div>
            <nav className="nav">
                <div className="menu-control">
                    <button className="menu-btns show-menu"
                        aria-label="open the navigation"
                        aria-haspopup="true"
                        aria-controls="menu"
                        aria-expanded="false">
                        <img src={MenuImg} alt="" />
                    </button>
                    <button className="menu-btns close-menu"
                        aria-label="close the navigation"
                        aria-pressed="false">
                        <img src={CloseImg} alt="" />
                    </button>
                </div>
                <div className="modal-container">
                    <ul className="nav-list" role="menu" id="menu">
                        <li  className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/stories">Stories</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/features">Features</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/pricing">Pricing</Link>
                        </li>

                    </ul>
                    <button className="btn-invite">
                        Get an invite
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
