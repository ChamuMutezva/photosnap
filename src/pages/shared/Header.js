import React from 'react'
import MenuImg from '../../assets/shared/mobile/menu.svg'
import CloseImg from '../../assets/shared/mobile/close.svg'
import LogoImg from '../../assets/shared/desktop/logo.svg'

function Header() {
    return (
        <header className="flex container">
            <div className="logo-container">
                <img src={LogoImg} alt="photosnap home page" />
            </div>
            <nav>
                <div className="menu-control">
                    <button className="menu-btns show-menu"
                        aria-label="open the navigation"
                        aria-expanded="false">
                        <img src={MenuImg} alt="" />
                    </button>
                    <button className="menu-btns close-menu"
                        aria-label="close the navigation"
                        aria-pressed="false">
                        <img src={CloseImg} alt="" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
