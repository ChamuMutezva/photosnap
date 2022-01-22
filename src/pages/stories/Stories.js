import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/Context'
import Hero from '../shared/Hero'
import HeroContent from '../shared/HeroContent'
import Story from '../shared/Story'
import storiesHeroMobile from '../../assets/stories/mobile/moon-of-appalacia.jpg'
import storiesHeroTablet from '../../assets/stories/tablet/moon-of-appalacia.jpg'
import storiesHeroDesktop from '../../assets/stories/desktop/moon-of-appalacia.jpg'


function Stories() {
    const { stories } = useContext(DataContext)
    return (
        <>
            <main>
                <h1 className="sr-only">Read the full Photosnap stories here</h1>
                <div className="main-primary">
                    <Hero mobile={storiesHeroMobile} tablet={storiesHeroTablet} desktop={storiesHeroDesktop} />
                    <HeroContent
                        spanText="Last month's featured story "
                        title="Hazy full moon of Appalachia"
                        author="by John Appleseed "
                        dateWritten="March 2nd 2020 "
                        linkText="Read the story"
                        content="The dissected plateau area, while not actually made up of geological mountains, 
                    is popularly called 'mountains', especially in eastern Kentucky and West Virginia, 
                    and while the ridges are not high, the terrain is extremely rugged. "/>
                </div>
                <div className="main-home-secondary-container">
                    {stories && stories.assets.map(elm => <Story key={elm.name} mobile={elm.imageMobile}
                        tablet={elm.imageTablet}  title={elm.name} author={elm.author} />)}
                </div>
            </main>
        </>
    )
}

export default Stories