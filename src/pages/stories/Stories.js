import React from 'react'
import Hero from '../shared/Hero'
import HeroContent from '../shared/HeroContent'
import storiesHeroMobile from '../../assets/stories/mobile/moon-of-appalacia.jpg'
import storiesHeroTablet from '../../assets/stories/tablet/moon-of-appalacia.jpg'
import storiesHeroDesktop from '../../assets/stories/desktop/moon-of-appalacia.jpg'


function Stories() {
    return (
        <main>
            <div className="main-primary">
                <Hero mobile={storiesHeroMobile} tablet={storiesHeroTablet} desktop={storiesHeroDesktop} />
                <HeroContent
                spanText="Last month's featured story "
                 title="Hazy full moon of Appalachia"
                    linkText="Read the story"
                    content="The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called 'mountains', especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged. "/>
            </div>
        </main>
    )
}

export default Stories
// 


//March 2nd 2020
//by John Appleseed 