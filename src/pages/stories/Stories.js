import React from 'react'
import Hero from '../shared/Hero'
import storiesHeroMobile from '../../assets/stories/mobile/moon-of-appalacia.jpg'
import storiesHeroTablet from '../../assets/stories/tablet/moon-of-appalacia.jpg'
import storiesHeroDesktop from '../../assets/stories/desktop/moon-of-appalacia.jpg'


function Stories() {
    return (
        <main>           
            <Hero mobile={storiesHeroMobile} tablet={storiesHeroTablet} desktop={storiesHeroDesktop}/>
        </main>
    )
}

export default Stories
