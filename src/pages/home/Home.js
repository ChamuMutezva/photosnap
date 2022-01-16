import React from 'react'
import Hero from '../shared/Hero'
import homeHeroMobile from '../../assets/home/mobile/create-and-share.jpg'
import homeHeroTablet from '../../assets/home/tablet/create-and-share.jpg'
import homeHeroDesktop from '../../assets/home/desktop/create-and-share.jpg'
import HeroContent from '../shared/HeroContent'

function Home() {
   
    return (
        <main>
            <div className="main-primary">
            <Hero mobile={homeHeroMobile} tablet={homeHeroTablet} desktop={homeHeroDesktop} />
            <HeroContent title="Create and share your photo Stories"
                linkText="Get an invite"
                content="Photosnap is a platform for photographers and visual storytellers. We make it 
            easy to share photos, tell stories and connect with others."/>
            </div>
        </main>
    )
}

export default Home
