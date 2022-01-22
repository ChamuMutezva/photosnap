import { useState } from 'react'
import { Link } from 'react-router-dom'
import MenuImg from '../../assets/shared/mobile/menu.svg'
import CloseImg from '../../assets/shared/mobile/close.svg'
import LogoImg from '../../assets/shared/desktop/logo.svg'

function Header() {
    const [menu, setMenu] = useState(false)
    function handleNavMenu(evt) {
        setMenu(!menu)
    }
    return (
        <header className="flex container">
            <div className="logo-container">
                <Link to="/"className="nav-btn" >
                    <img src={LogoImg} alt="photosnap home page" />
                </Link>
            </div>
            <nav className="nav" aria-label="main menu navigation" role="navigation">
                <div className="menu-control">
                    <button className={`menu-btns`}
                        onClick={handleNavMenu}
                        aria-controls="menu"
                        aria-haspopup="true"
                        aria-expanded={menu ? true : false}>
                        <img src={MenuImg}
                            alt="open the navigation"
                            className={`show-menu ${menu ? "hide-hamburger" : ""}`} />
                        <img src={CloseImg}
                            alt="close the navigation"
                            className={`close-menu ${menu ? "show-close-btn" : ""}`} />
                    </button>
                    {/*
                    <button className={`menu-btns show-menu ${menu ? "hide-hamburger" : ""}`}
                        aria-label="open the navigation"                       
                        aria-controls="menu"
                        onClick={handleNavMenu}
                        aria-expanded="false">
                        <img src={MenuImg} alt="" />
                    </button>
                    <button className={`menu-btns close-menu ${menu ? "show-close-btn"  : ""}`} 
                        aria-label="close the navigation"
                        onClick={handleNavMenu}
                        aria-controls="menu"
                        aria-expanded="true"
                        >
                        <img src={CloseImg} alt="" />
                    </button>
                    */}
                </div>
                <div className={`modal-container ${!menu ? "hide-modal" : ""}`}>
                    <ul className="nav-list" role="menu" id="menu">
                        <li className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/stories" onClick={handleNavMenu}>Stories</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/features" onClick={handleNavMenu}>Features</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link className="nav-list-item-btn" to="/pricing" onClick={handleNavMenu}>Pricing</Link>
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
