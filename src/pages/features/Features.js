import React from 'react'
import Hero from '../shared/Hero'
import featureHeroMobile from '../../assets/features/mobile/hero.jpg'
import featureHeroTablet from '../../assets/features/tablet/hero.jpg'
import featureHeroDesktop from '../../assets/features/desktop/hero.jpg'
import HeroContent from '../shared/HeroContent'

function Features() {
    return (
        <main>
            <div className="main-primary">
                <Hero mobile={featureHeroMobile} tablet={featureHeroTablet} desktop={featureHeroDesktop} />
                <HeroContent title="Features"
                    content=" We make sure all of our features are designed to be loved by every aspiring and even 
             professional photograpers who wanted to share their stories."/>
            </div>
        </main>
    )
}

export default Features
