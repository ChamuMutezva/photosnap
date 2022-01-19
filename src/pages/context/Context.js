import { useState, createContext, useEffect } from 'react'
import axios from 'axios'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [data, setData] = useState([])
    const [fetchStatus, setFetchStatus] = useState('idle')
    const [homePage, setHomePage] = useState("")
    const [stories, setStories] = useState("")
    const [features, setFeatures] = useState("")
    const [pricing, setPricing] = useState("")
    const [shared, setShared] = useState("")

    //get data from json api
    const getData = async () => {
        await axios.get('/data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )

            .then(function (response) {
                return response.data;
            })

            .then(function (myJson) {
                setData(myJson)
                setHomePage(myJson[0])
                setFeatures(myJson[1])
                setPricing(myJson[2])
                setShared(myJson[3])
                setStories(myJson[4])
            });

    }

    useEffect(() => {
        getData()

        setFetchStatus("success")
    }, [])
    // console.log(data)
    if (fetchStatus === 'idle' || fetchStatus === 'loading') {
        return <div className='loading'>
            <h2 className='loading-title'>Loading...</h2>
        </div>
    }

    return (
        <DataContext.Provider value={{ data, homePage , stories, pricing, features, shared}}>
            {props.children}
        </DataContext.Provider>
    )
}