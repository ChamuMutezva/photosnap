import React from 'react'
import Hero from '../shared/Hero'
import homeHeroMobile from '../../assets/home/mobile/create-and-share.jpg'
import homeHeroTablet from '../../assets/home/tablet/create-and-share.jpg'
import homeHeroDesktop from '../../assets/home/desktop/create-and-share.jpg'


function Home() {
    return (
        <main>            
            <Hero mobile={homeHeroMobile} tablet={homeHeroTablet} desktop={homeHeroDesktop}/>
        </main>
    )
}

export default Home
