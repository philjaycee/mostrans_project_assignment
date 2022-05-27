import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, {  useEffect,useState } from 'react'
import Container from '../Landpage/Container'
import Location from '../Locations/location'
import './location_search.css'

import Navbar from '../Navbar/navbar__'



const Location_Search = () =>  { 

   const[allCharacters, setAllCharacters] = useState([])
   const [loadMore, setLoadMore] = useState('https://rickandmortyapi.com/api/character')

  const getAllCharacters = async () => {
    const res = await fetch(loadMore)
    const data = await res.json() 

    function createCharactersObject(results)  {
      results.forEach( async characters => {
        const res = await fetch(`https://rickandmortyapi.com/api/character/${characters.id}`)
        const data =  await res.json()
        setAllCharacters( currentList => [...currentList, data])
      })
    }
    createCharactersObject(data.results)
  }

 useEffect(() => {
  getAllCharacters()
 }, [])

    return (
      <>      
      <Navbar />
      <div className="banner-area">
      <div className="container">
            <div className="row mx-1">
              <div className="sm col-3 mx-2">
                <h1>List of Characters</h1>
              </div>
              <div className="lg col-8 px-2">
              <div className="all-container">
                    {allCharacters.map( (charactersInfo, index) => 
                      <Container
                        key={index}
                        id={charactersInfo.id}
                        image={charactersInfo.image}
                        name={charactersInfo.name}
                      />)}
                    </div>
              </div>
            </div>
          </div>  
        </div>
      </>
    )
}

export default Location_Search 