import React from 'react'
import Hero from '../shared/Hero'
import pricingHeroMobile from '../../assets/pricing/mobile/hero.jpg'
import pricingHeroTablet from '../../assets/pricing/tablet/hero.jpg'
import pricingHeroDesktop from '../../assets/pricing/desktop/hero.jpg'
function Pricing() {
    return (
        <main>           
            <Hero mobile={pricingHeroMobile} tablet={pricingHeroTablet} desktop={pricingHeroDesktop}/>
        </main>
    )
}

export default Pricing
