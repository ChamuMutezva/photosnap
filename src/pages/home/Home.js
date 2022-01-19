import { useContext } from 'react'
import { DataContext } from '../context/Context'
import Hero from '../shared/Hero'
import HeroContent from '../shared/HeroContent'
import Secondary from '../shared/Secondary'
import Story from '../shared/Story'

function Home() {

    const { homePage, stories } = useContext(DataContext)
    console.log(homePage)
    console.log(stories)
   const selectStories = stories && stories.assets.filter(elm => elm.shared === true)
   console.log(selectStories)
    return (
        <main>
            <div className="main-home-primary-container">
                <h1 className="sr-only">An introduction to the photosnap application</h1>
                <div className="main-primary main-primary-home">


                    {homePage && homePage.assets.map(elm => <div key={elm.name} className="home-primary">
                        <Hero mobile={elm.imageMobile} tablet={elm.imageTablet} desktop={elm.imageDesktop} />
                        <HeroContent title={elm.title} linkText={elm.link} content={elm.content} linkStatus={true} />
                    </div>)}

                </div>
                <div className="main-seondary main-secondary-home">
                    <Secondary />
                </div>
            </div>
            <div className="main-home-secondary-container">
            
              {selectStories && selectStories.map(elm => <Story key={elm.name} mobile={elm.imageMobile}
               tablet={elm.imageTablet} desktop={elm.imageDesktop} title={elm.name}  author={elm.author}/>)}
                
            </div>
        </main>
    )
}

export default Home



