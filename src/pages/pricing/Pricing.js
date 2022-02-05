import  React from 'react'
import { useEffect } from 'react'
import Hero from '../shared/Hero'
import HeroContent from '../shared/HeroContent'
import pricingHeroMobile from '../../assets/pricing/mobile/hero.jpg'
import pricingHeroTablet from '../../assets/pricing/tablet/hero.jpg'
import pricingHeroDesktop from '../../assets/pricing/desktop/hero.jpg'
import Complimentary from '../shared/Complimentary'
import PriceSwitcher from './PriceSwitcher'

function Pricing() {
/*
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
*/
    return (
        <>
            <main tabIndex="-1">
                <h1 className="sr-only">Pricing and subscription</h1>
                <div className="main-primary pricing-primary">
                    <Hero mobile={pricingHeroMobile} tablet={pricingHeroTablet} desktop={pricingHeroDesktop} />
                    <HeroContent title="Pricing "
                        content="Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                        It's the simple way to create and share your photos. "/>
                </div>

                <div className="pricing-secondary">
                    <PriceSwitcher />                   
                </div>

            </main>
            <aside>
                <Complimentary />
            </aside>
        </>
    )
}

export default Pricing