import React from 'react'
import Hero from '../shared/Hero'
import featureHeroMobile from '../../assets/features/mobile/hero.jpg'
import featureHeroTablet from '../../assets/features/tablet/hero.jpg'
import featureHeroDesktop from '../../assets/features/desktop/hero.jpg'

function Features() {
    return (
        <main>
            <Hero mobile={featureHeroMobile} tablet={featureHeroTablet} desktop={featureHeroDesktop}/>
        </main>
    )
}

export default Features
