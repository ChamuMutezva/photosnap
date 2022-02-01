import React from 'react'
import { useContext, useEffect } from 'react'
import { DataContext } from '../context/Context'
import Hero from '../shared/Hero'
import featureHeroMobile from '../../assets/features/mobile/hero.jpg'
import featureHeroTablet from '../../assets/features/tablet/hero.jpg'
import featureHeroDesktop from '../../assets/features/desktop/hero.jpg'
import HeroContent from '../shared/HeroContent'
import FeatureList from '../shared/FeatureList'
import Complimentary from '../shared/Complimentary'

function Features() {
    const { features } = useContext(DataContext)
    // const selectFeatures = features && features.svgs.filter(elm => elm.shared === true)
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <main tabIndex="-1">
                <h1 className="sr-only">Photosnap application features</h1>
                <div className="main-primary features-primary">
                    <Hero mobile={featureHeroMobile} tablet={featureHeroTablet} desktop={featureHeroDesktop} />
                    <HeroContent title="Features"
                        content=" We make sure all of our features are designed to be loved by every aspiring 
                        and even professional photograpers who wanted to share their stories."/>
                </div>

                <div className="feature-section">
                    <div className="container feature-list">
                        {features && features.svgs.map(elm => <FeatureList key={elm.id}
                            width={elm.width} height={elm.height}
                            title={elm.title} url={elm.url}
                            content={elm.content} />)}
                    </div>
                </div>
            </main>
            <aside>
                <Complimentary />
            </aside>

        </>
    )
}

export default Features
