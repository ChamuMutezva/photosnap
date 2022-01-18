import { useContext } from 'react'
import { DataContext } from '../context/Context'
import Hero from '../shared/Hero'
/*
import homeHeroMobile from '../../assets/home/mobile/create-and-share.jpg'
import homeHeroTablet from '../../assets/home/tablet/create-and-share.jpg'
import homeHeroDesktop from '../../assets/home/desktop/create-and-share.jpg'

import beautyStoryMobile from '../../assets/home/mobile/beautiful-stories.jpg'
import beautyStoryTablet from '../../assets/home/tablet/beautiful-stories.jpg'
import beautyStoryDesktop from '../../assets/home/desktop/beautiful-stories.jpg'

import designMobile from '../../assets/home/mobile/designed-for-everyone.jpg'
import designTablet from '../../assets/home/tablet/designed-for-everyone.jpg'
import designDesktop from '../../assets/home/desktop/designed-for-everyone.jpg'
*/
import HeroContent from '../shared/HeroContent'
import Secondary from '../shared/Secondary'

function Home() {

    const { homePage } = useContext(DataContext)

    //   const [assets] = useState(data[0].assets)
    //  console.log(data[0])
    // const homePage = data[0]
    // const { assets } = data[0]
    console.log(homePage)
    //  console.log(assets)

    return (
        <main>
            <h1 className="sr-only">An introduction to the photosnap application</h1>
            <div className="main-primary main-primary-home">


                {homePage && homePage.assets.map(elm => <div key={elm.name} className="home-primary">
                    <Hero mobile={elm.imageMobile} tablet={elm.imageTablet} desktop={elm.imageDesktop} />
                    <HeroContent title={elm.title} linkText={elm.linkText} content={elm.content} />
                </div>)}

                {/*
                <div className="home-primary">
                    <Hero mobile={homeHeroMobile} tablet={homeHeroTablet} desktop={homeHeroDesktop} />
                    <HeroContent
                        title="Create and share your photo Stories"
                        linkText="Get an invite"
                        content="Photosnap is a platform for photographers and visual storytellers.
                         We make it easy to share photos, tell stories and connect with others."/>
                </div>
                <div className="home-primary">
                    <Hero mobile={beautyStoryMobile} tablet={beautyStoryTablet} desktop={beautyStoryDesktop} />
                    <HeroContent
                        title="Beautiful stories every time"
                        linkText="View the stories"
                        content="We provide design templates to ensure your stories look terrific. Easily add 
                        photos, text, embed maps and media from other networks. Then share your story 
                        with everyone."/>
                </div>
                <div className="home-primary">
                    <Hero mobile={designMobile} tablet={designTablet} desktop={designDesktop} />
                    <HeroContent
                        title="Designed for everyone"
                        linkText="View the stories"
                        content="Photosnap can help you create stories that resonate with your audience.  Our 
                    tool is designed for photographers of all levels, brands, businesses you name it."
                    />
                </div>
                */}

            </div>
            <div className="main-seondary main-secondary-home">
                <Secondary />
            </div>
        </main>
    )
}

export default Home



