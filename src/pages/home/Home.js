import { useContext, useRef, useEffect } from 'react'
import { DataContext } from '../context/Context'
import Hero from '../shared/Hero'
import HeroContent from '../shared/HeroContent'
import Story from '../shared/Story'
import FeatureList from '../shared/FeatureList'

function Home() {

    const homeMain = useRef()

    useEffect(() => {
        homeMain.current.focus()
    })

    const { homePage, stories, features } = useContext(DataContext)
    const selectStories = stories && stories.assets.filter(elm => elm.shared === true)
    const selectFeatures = features && features.svgs.filter(elm => elm.shared === true)

    return (
        <>
            <main tabIndex="-1" ref={homeMain} >
                <div className="main-home-primary-container" >
                    <h1 className="sr-only">An introduction to the photosnap application</h1>
                    <div className="main-primary main-primary-home">

                        {homePage && homePage.assets.map(elm => <div key={elm.name} className="home-primary">
                            <Hero mobile={elm.imageMobile} tablet={elm.imageTablet} desktop={elm.imageDesktop} />
                            <HeroContent title={elm.title} linkText={elm.link} content={elm.content} linkStatus={true} />
                        </div>)}

                    </div>
                </div>
                <div className="main-home-secondary-container">
                    {selectStories && selectStories.map(elm => <Story key={elm.name} mobile={elm.imageMobile}
                        tablet={elm.imageTablet} desktop={elm.imageDesktop} title={elm.name} author={elm.author} />)}

                </div>
            </main>
            <aside>
                <div className="container feature-container">
                    {selectFeatures && selectFeatures.map(elm => <FeatureList key={elm.id}
                        width={elm.width} height={elm.height}
                        title={elm.title} url={elm.url}
                        content={elm.content} />)}
                </div>
            </aside>
        </>
    )
}

export default Home



